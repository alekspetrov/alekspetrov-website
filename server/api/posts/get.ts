import slugify from 'slugify'
import { blockFactory } from '~/utils/notionBlocks'
import { fetchTable, fetchBlocks } from '../../../utils/notionApi'

const makeBlocks = (post) => {
  const postBlocks = post.reduce((blocks, currentBlock) => {
    const lastBlock = blocks[blocks.length - 1] || {}

    if (
      lastBlock.type === 'bulleted-list' &&
      currentBlock.type === 'bulleted_list_item'
    ) {
      const isArray = Array.isArray(lastBlock.content[0])

      // Makes list items into an array
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

const getBlocks = async (id) => {
  console.log('getBlocks')

  const post = await fetchBlocks(id)
  const blocks = makeBlocks(post)
  return blocks
}

const getPage = async (slug) => {
  const results = await fetchTable()

  // Get page form the list
  const page = results.find((post) => {
    const { Name } = post.properties
    const postTitle = Name.title[0].plain_text
    const postSlug = slugify(postTitle).toLowerCase()

    return postSlug === slug
  })

  // Get page blocks by fetcinng the page
  const blocks = await getBlocks(page.id)
  const { Name, Description } = page.properties

  const pageData = {
    title: Name.title[0].plain_text,
    description: Description.rich_text[0].plain_text,
    date: page.properties['Crated at'].created_time,
  }

  return { ...pageData, blocks }
}

export default async (req) => {
  const params = new URLSearchParams(req.url)
  const slug = params.get('slug')

  return getPage(slug)
}
