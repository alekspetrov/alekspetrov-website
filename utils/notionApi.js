import { Client } from '@notionhq/client'
import config from '#config'

const NOTION_TOKEN = config.notionToken
const NOTION_DB = config.notionDb

const notion = new Client({
  auth: NOTION_TOKEN,
})

const fetchDatabase = async () => {
  const response = await notion.databases.query({
    database_id: NOTION_DB,
    filter: {
      property: 'Status',
      select: {
        equals: 'Published',
      },
    },
  })

  return response.results
}

const fetchPage = async pageId => {
  const response = await notion.pages.retrieve({
    page_id: pageId,
  })

  return response
}

const fetchBlocks = async blockId => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  })
  return response.results
}

export { fetchDatabase, fetchPage, fetchBlocks }
