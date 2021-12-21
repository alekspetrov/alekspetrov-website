import { foramatDate } from '../../../utils/dateToReadable'
import config from '#config'

const NOTION_TOKEN = config.notionToken
const NOTION_PAGE_ID = config.notionPageId
const NOTION_VERSION = config.notionVersion

const getPosts = async () => {
  const { results } = await $fetch(
    `https://api.notion.com/v1/databases/${NOTION_PAGE_ID}/query`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': `${NOTION_VERSION}`,
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=1, stale-while-revalidate',
      },
      body: JSON.stringify({
        filter: {
          property: 'Status',
          select: {
            equals: 'Published',
          },
        },
      }),
    }
  )

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

export default async (req, res) => {
  return getPosts()
}
