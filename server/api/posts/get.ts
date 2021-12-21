import slugify from 'slugify'
import { blockFactory } from '~/utils/notionBlocks'
import { fetchPosts, fetchPost } from '../../../utils/notionApi'

const parsePostBlocks = post => {
  const postBlocks = post.reduce((blocks, currentBlock) => {
    const lastBlock = blocks[blocks.length - 1] || {}

    if (
      lastBlock.type === 'bulleted-list' &&
      currentBlock.type === 'bulleted_list_item'
    ) {
      const isArray = Array.isArray(lastBlock.content[0])

      // TODO: Refactor this
      if (isArray) {
        lastBlock.content = [
          ...lastBlock.content,
          blockFactory(currentBlock).content,
        ]
      } else {
        lastBlock.content = [
          [...lastBlock.content],
          blockFactory(currentBlock).content,
        ]
      }
    } else {
      blocks.push(blockFactory(currentBlock))
    }

    return blocks
  }, [])

  return postBlocks
}

const getPostBlocks = async id => {
  const post = await fetchPost(id)
  const blocks = parsePostBlocks(post)

  return blocks
}

const getPost = async slug => {
  const results = await fetchPosts()
  const page = results.find(post => {
    const postTitle = post.properties.Name.title[0].plain_text
    const postSlug = slugify(postTitle).toLowerCase()

    return postSlug === slug
  })
  const blocks = await getPostBlocks(page.id)
  const pageData = {
    title: page.properties.Name.title[0].plain_text,
    description: page.properties.Description.rich_text[0].plain_text,
    date: page.properties['Crated at'].created_time,
  }

  return { ...pageData, blocks }
}

export default async (req, res) => {
  const params = new URLSearchParams(req.url)
  const slug = params.get('slug')

  return getPost(slug)
}
