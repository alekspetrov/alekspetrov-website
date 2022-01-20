import config from '#config'

const NOTION_TOKEN = config.notionToken
const NOTION_PAGE_ID = config.notionPageId
const NOTION_VERSION = config.notionVersion

const params = {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${NOTION_TOKEN}`,
    'Notion-Version': `${NOTION_VERSION}`,
    'Content-Type': 'application/json',
    'Cache-Control': 's-maxage=3600, stale-while-revalidate=3600',
  },
}

const fetchPosts = async () => {
  const { results } = await $fetch(
    `https://api.notion.com/v1/databases/${NOTION_PAGE_ID}/query`,
    {
      ...params,
      method: 'POST',
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

const fetchPost = async id => {
  const { results } = await $fetch(
    `https://api.notion.com/v1/blocks/${id}/children`,
    params
  )

  return results
}

export { fetchPosts, fetchPost }
