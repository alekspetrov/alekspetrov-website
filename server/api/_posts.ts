import { Client } from '@notionhq/client'
import { foramatDate } from '../../utils/dateToReadable'
import { useQuery } from 'h3'
import { blockFactory } from '~/utils/notionBlocks'
import config from '#config'

const NOTION_TOKEN = config.notionToken
const NOTION_PAGE_ID = config.notionPostDbId

const notion = new Client({
  auth: NOTION_TOKEN,
})

interface Post {
  id: string
  created_time: string
  properties: {
    Name: {
      [title: string]: {
        plain_text: string
      }
    }
    Description: {
      [rich_text: string]: {
        plain_text: string
      }
    }
    Tags: {
      multi_select: string
    }
  }
}

const getPosts = async () => {
  const { results } = await notion.databases.query({
    database_id: NOTION_PAGE_ID,
    page_size: 5,
    filter: {
      property: 'Status',
      select: {
        equals: 'Published',
      },
    },
  })

  const data = results.map((post: Post) => {
    console.log(post)

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

const getPage = async id => {
  const [page, { results }] = await Promise.all([
    notion.pages.retrieve({ page_id: id }),
    notion.blocks.children.list({ block_id: id }),
  ])

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

  return { page, blocks }
}

export default async (req, res) => {
  const { query } = useQuery(req)
  return query ? getPage(query) : getPosts()
}

/*
{
  page: {
    title: String,
    description: String,
    tags: [String],
    created_at: Date,
  },
  blocks: [
    {
      type: 'code',
      content: [
        {
          text: String,
          language: String,
        }
      ],
    },
    {
      type: 'heading'
      level: Number,
      content: [
        {
          text: String,
        }
      ]
    },
    { 
      type: 'paragraph',
      content: [
        {
          text: String,
          properties: [bold, italic, underline],
          href: String | Null,
        },
      ]
    },
    {
      type: 'numbered-list',
      items: [
            -- item
            {
              id: String,
              -- item.content
              content: [
                {
                  text: String,
                  href: String | Null,
                }
              ]
            }
          ]
        }
      ]
    },
    {
      type: 'image',
      src: String,
      properties: [width, height],
      caption: {
        content: {
          text: String,
          properties: [bold, italic, underline],
          href: String | Null,
        }
      }
    },
    {
      type: 'quote'
      content: [
        {
          text: String,
          properties: [bold, italic, underline],
          href: String | Null,
        }
      ]
    },
    {
      type: 'divider'
    },
    {
      type: 'video',
    }
  ]
}

*/
