import config from '#config'

const API = config.api || 'http://127.0.0.1:8787'

const fetchApi = async (route: string) => {
  try {
    const res = await fetch(`${API}/${route}`)
    return res.json()
  } catch (e) {
    throw Error(`Can not get data from ${route}`)
  }
}

export { fetchApi }
