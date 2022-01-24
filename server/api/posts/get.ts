import slugify from 'slugify'
import { blockFactory } from '~/utils/notionBlocks'
import { fetchDatabase, fetchBlocks, fetchPage } from '../../../utils/notionApi'

const makeBlocks = post => {
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
    const post = await fetchBlocks(id)
    const blocks = makeBlocks(post)
    return blocks
  } catch (e) {
    throw new Error("Can't get blocks")
  }
}

const getPage = async slug => {
  try {
    const results = await fetchDatabase()

    const page = results.find(post => {
      const { Name } = post.properties
      const postTitle = Name.title[0].plain_text
      const postSlug = slugify(postTitle).toLowerCase()

      return postSlug === slug
    })

    const blocks = await getBlocks(page.id)
    const { Name, Description } = page.properties

    const pageData = {
      title: Name.title[0].plain_text,
      description: Description.rich_text[0].plain_text,
      date: page.properties['Crated at'].created_time,
    }

    return { ...pageData, blocks }
  } catch (e) {
    throw new Error("Can't load data from Notion")
  }
}

export default async req => {
  const params = new URLSearchParams(req.url)
  const slug = params.get('slug')

  return getPage(slug)
}
