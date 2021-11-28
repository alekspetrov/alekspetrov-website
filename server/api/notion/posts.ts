import { Client } from '@notionhq/client'

const NOTION_API_URL = process.env.NOTION_API_URL || 'http://localhost:3000'
const NOTION_TOKEN = process.env.NOTION_TOKEN
const NOTION_POSTS_DB_ID = process.env.NOTION_POSTS_DB_ID
const NOTION_VERSION = process.env.NOTION_VERSION

const notion = new Client({
  auth: NOTION_TOKEN,
})

export default async (req, res) => {
  const { results } = await notion.databases.query({
    database_id: NOTION_POSTS_DB_ID,
    filter: {
      property: 'Status',
      select: {
        equals: 'Published',
      },
    },
  })

  const data = results.map(post => {
    return {
      id: post.id,
      crated_at: post.created_time,
      title: post.properties.Name.title[0].plain_text,
      desctiption: post.properties.Description.rich_text[0].plain_text,
    }
  })

  return data
}
