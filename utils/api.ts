const config = useRuntimeConfig()

const API_URL =
  process.env.NODE_ENV === 'development' ? 'http://0.0.0.0:8787' : config.apiUrl

const fetchApi = async (route, params = {}) => {
  try {
    const response = await fetch(`${API_URL}/${route}`, params)
    const json = await response.json()

    return json
  } catch (error) {
    throw Error(`API Error ${API_URL}/${route}`)
  }
}

export { fetchApi }
