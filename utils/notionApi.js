import config from '#config'

const API = config.notionToken || 'http://127.0.0.1:8787'

const fetchTable = async () => {
  try {
    const response = await fetch(`${API}/database`)
    return response.json()
  } catch (e) {
    throw Error('Can not load Table ', e)
  }
}

const fetchBlocks = async blockId => {
  const response = await fetch(`${API}/blocks/${blockId}`)

  return response.json()
}

export { fetchTable, fetchBlocks }
