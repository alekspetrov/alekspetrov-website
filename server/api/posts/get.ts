import slugify from 'slugify'
import { blockFactory } from '~/utils/notionBlocks'
import { fetchDatabase, fetchPage } from '../../../utils/notionApi'

const parsePostBlocks = post => {
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

const getBlocks = async id => {
  try {
    const post = await fetchPage(id)
    const blocks = parsePostBlocks(post)
    return blocks
  } catch (e) {
    throw new Error(e)
  }
}

const getPage = async slug => {
  const results = await fetchDatabase()

  const page = results.find(post => {
    const postTitle = post.properties.Name.title[0].plain_text
    const postSlug = slugify(postTitle).toLowerCase()

    return postSlug === slug
  })

  const blocks = await getBlocks(page.id)

  const pageData = {
    title: page.properties.Name.title[0].plain_text,
    description: page.properties.Description.rich_text[0].plain_text,
    date: page.properties['Crated at'].created_time,
  }

  return { ...pageData, blocks }
}

export default async req => {
  const params = new URLSearchParams(req.url)
  const slug = params.get('slug')

  return getPage(slug)
}
