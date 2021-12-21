import { Client } from '@notionhq/client'
import { foramatDate } from '../../../utils/dateToReadable'
import { useQuery } from 'h3'
import config from '#config'

import { ClientOptions } from '@notionhq/client/build/src/Client'

const NOTION_TOKEN = config.notionToken
const NOTION_PAGE_ID = config.notionPostDbId

const notion = new Client({
  auth: NOTION_TOKEN,
})

// interface Post {
//   id: string
//   created_time: string
//   last_edited_time: string
//   cover: string
//   icon: string
//   parent: {
//     type: string
//     database_id: string
//   }
//   archived: boolean
//   properties: {
//     Name: {
//       [title: string]: {
//         plain_text: string
//       }
//     }
//     Description: {
//       [rich_text: string]: {
//         plain_text: string
//       }
//     }
//     Tags: {
//       multi_select: string
//     }
//     Type: {
//       id: string
//       type: string
//       select: string[]
//     }
//   }
// }

const getPosts = async (limit = 5) => {
  const { results } = await notion.databases.query({
    database_id: NOTION_PAGE_ID,
    page_size: limit,
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

export default async (req, res) => {
  return getPosts()
}
