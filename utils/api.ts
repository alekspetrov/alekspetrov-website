const config = useRuntimeConfig()

const API_URL =
  process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:8787' : config.apiUrl

const fetchApi = async (route, params = {}) => {
  try {
    const res = await fetch(`${API_URL}/${route}`, params)
    const data = await res.json()

    return data
  } catch (e) {
    throw Error(`Can not get data from ${route}`)
  }
}

export { fetchApi }
