const config = useRuntimeConfig()

const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://127.0.0.1:8787'
    : config.apiUrl

const fetchApi = async (route: string, params = {}) => {
  try {
    const res = await fetch(`${API_URL}/${route}`, params)
    const data = await res.json()

    return data
  } catch (e) {
    throw Error(`Can not get data from ${route}`)
  }
}

export { fetchApi }
