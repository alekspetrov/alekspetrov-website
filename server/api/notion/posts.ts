import { Client } from '@notionhq/client'
import { foramatDate } from '../../../utils/dateToReadable'
import { useQuery } from 'h3'
import config from '#config'

const NOTION_TOKEN = config.notionToken
const NOTION_POSTS_DB_ID = config.notionPostDbId

const notion = new Client({
  // baseUrl: 'https://notion-api.splitbee.io',
  auth: NOTION_TOKEN,
})

const getPosts = async () => {
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
      crated_at: foramatDate(post.created_time),
      title: post.properties.Name.title[0].plain_text,
      desctiption: post.properties.Description.rich_text[0].plain_text || '',
      tags: post.properties.Tags.multi_select,
    }
  })

  return data
}

const getPost = async query => {
  const [page, { results }] = await Promise.all([
    notion.pages.retrieve({ page_id: query }),
    notion.blocks.children.list({ block_id: query }),
  ])

  const content = results.map(post => {
    return {
      type: post.type,
      content: post[post.type].text,
    }
  })

  return { page, content }
}

export default async (req, res) => {
  const { query } = useQuery(req)
  return query ? getPost(query) : getPosts()
}
