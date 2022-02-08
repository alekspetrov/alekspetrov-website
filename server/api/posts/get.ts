import { fetchApi } from '../../../api'
import { blockFactory } from '../../../utils/blockFactory'

const makeBlocks = (blocks) => {
  const pageBlocks = blocks.reduce((blocks, currentBlock) => {
    const lastBlock = blocks[blocks.length - 1] || {}

    if (
      lastBlock.type === 'bulleted-list' &&
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

const getPage = async (slug) => {
  const res = await fetchApi(`blocks/${slug}`)

  return { ...res, blocks: makeBlocks(res.blocks) }
}

export default (req) => {
  const params = new URLSearchParams(req.url)
  const slug = params.get('slug')

  return getPage(slug)
}
