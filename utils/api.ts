import config from '#config'

const API = config.api || 'http://127.0.0.1:8787'

const fetchApi = async (route: string, params = {}) => {
  try {
    const res = await fetch(`${API}/${route}`, params)
    const data = await res.json()

    return data
  } catch (e) {
    throw Error(`Can not get data from ${route}`)
  }
}

export { fetchApi }
