import { Client } from '@notionhq/client'
import slugify from 'slugify'
import config from '#config'
import { blockFactory } from '~/utils/notionBlocks'

const NOTION_TOKEN = config.notionToken
const NOTION_PAGE_ID = config.notionPostDbId

const notion = new Client({
  auth: NOTION_TOKEN,
})

const getPageBlocks = async id => {
  const { results } = await notion.blocks.children.list({ block_id: id })

  const blocks = results.reduce((blocks, currentBlock) => {
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

  return blocks
}

export default async (req, res) => {
  const params = new URLSearchParams(req.url)
  const slug = params.get('slug')

  const { results } = await notion.databases.query({
    database_id: NOTION_PAGE_ID,
    filter: {
      property: 'Status',
      select: {
        equals: 'Published',
      },
    },
  })

  const page = results.find(post => {
    const postSlug = slugify(
      post.properties.Name.title[0].plain_text
    ).toLowerCase()

    return postSlug === slug
  })

  const blocks = await getPageBlocks(page.id)

  return { page, blocks }
}
