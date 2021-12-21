import config from '#config'

const NOTION_TOKEN = config.notionToken
const NOTION_PAGE_ID = config.notionPageId
const NOTION_VERSION = config.notionVersion

export const fetchPosts = async () => {
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

  return results
}

export const fetchPost = async id => {
  const { results } = await $fetch(
    `https://api.notion.com/v1/blocks/${id}/children`,
    {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${NOTION_TOKEN}`,
        'Notion-Version': `${NOTION_VERSION}`,
        'Content-Type': 'application/json',
        'Cache-Control': 's-maxage=1, stale-while-revalidate',
      },
    }
  )
  return results
}
