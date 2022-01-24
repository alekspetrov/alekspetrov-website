import { foramatDate } from '../../../utils/dateToReadable'
import { fetchDatabase } from '../../../utils/notionApi'

const getDatabase = async () => {
  const response = await fetchDatabase()

  const data = response.map(post => {
    return {
      id: post.id,
      cover: post.properties.Image?.rich_text[0]?.plain_text || null,
      date: foramatDate(post.created_time),
      title: post.properties.Name?.title[0]?.plain_text,
      description: post.properties.Description?.rich_text[0]?.plain_text || '',
      tags: post.properties.Tags?.multi_select,
    }
  })

  return { main: data[0], list: data.filter((_, i) => i !== 0) }
}

export default async (req, res) => {
  return getDatabase()
}
