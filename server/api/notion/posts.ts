import { Client } from '@notionhq/client'
import { foramatDate } from '../../../utils/dateToReadable'
import { useQuery } from 'h3'
import config from '#config'

const NOTION_TOKEN = config.notionToken
const NOTION_POSTS_DB_ID = config.notionPostDbId

const notion = new Client({
  auth: NOTION_TOKEN,
})

const getPosts = async () => {
  const { results } = await notion.databases.query({
    database_id: NOTION_POSTS_DB_ID,
    page_size: 5,
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

const blockNames = {
  bulleted_list_item: 'bulleted-list',
  paragraph: 'paragraph',
  heading_3: 'heading-3',
  image: 'image',
}

const blockFactory = (block, options = { duplicated: false }) => {
  if (block.type === 'image') {
    return {
      id: block.id,
      type: blockNames[block.type],
      src: block.image.file.url,
      caption: block.image.caption[0]?.text.content || '',
    }
  }

  if (block.type === 'divider') {
    return {
      id: block.id,
      type: 'divider',
    }
  }

  if (block.type === 'bulleted_list_item') {
    return {
      id: block.id,
      type: blockNames[block.type],
      content: block[block.type].text.map(item => {
        return {
          text: item.text.content,
          href: item.text.link?.url,
        }
      }),
    }
  }

  if (block.type === 'heading_3') {
    return {
      id: block.id,
      type: 'heading-3',
      content: block[block.type].text.map(text => {
        return {
          type: text.type,
          text: text.text.content,
          href: text.href,
        }
      }),
    }
  }

  if (block.type === 'paragraph') {
    return {
      id: block.id,
      type: blockNames[block.type],
      content: block[block.type].text.map(text => {
        return {
          text: text.text.content,
          href: text.href,
        }
      }),
    }
  }
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
