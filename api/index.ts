import config from '#config'

// const API = config.api || 'http://127.0.0.1:8787'
// const API = 'https://worker.alekspetrov.com'
const API = 'https://cf-notion-worker.alekspetrov.workers.dev'

const fetchApi = async (route: string) => {
  try {
    const res = await fetch(`${API}/${route}`)
    const data = await res.json()

    return data
  } catch (e) {
    throw Error(`Can not get data from ${route}`)
  }
}

export { fetchApi }
