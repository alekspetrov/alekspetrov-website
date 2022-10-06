import { fetchApi } from '../../../utils/api'
import { blockFactory } from '../../../utils/blockFactory'
import { IncomingMessage, ServerResponse } from 'http'
import { formatDate } from '~~/utils/dateToFormat'

const makeBlocks = (blocks) => {
  if (!blocks) return []

  const pageBlocks = blocks.reduce((blocks, currentBlock) => {
    const lastBlock = blocks[blocks.length - 1] || {}

    if (
      lastBlock.type === 'list' && // should be the same as type in blockFactory
      currentBlock.type === 'bulleted_list_item'
    ) {
      const isArray = Array.isArray(lastBlock.content[0])

      // Makes list items into an array
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

  return pageBlocks
}

const getPage = async (slug: string) => {
  const res = await fetchApi(`pages/${slug}`)
  const dateOptions = { day: 'numeric', month: 'short' }

  return {
    ...res,
    date: formatDate(res.date, dateOptions),
    blocks: makeBlocks(res.blocks),
  }
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  const url = new URL('https:' + req.url)
  const params = new URLSearchParams(url.searchParams)
  const slug = params.get('slug')
  const data = await getPage(slug)

  res.statusCode = data.status || 200

  return data
}
