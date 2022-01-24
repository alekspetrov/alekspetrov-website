import { foramatDate } from '../../../utils/dateToReadable'
import { fetchDatabase } from '../../../utils/notionApi'

const getDatabase = async () => {
  const response = await fetchDatabase()

  const data = response.map(post => {
    const { Image, Name, Description, Tags } = post.properties

    return {
      id: post.id,
      cover: Image.rich_text[0]?.plain_text || null,
      date: foramatDate(post.created_time),
      title: Name.title[0]?.plain_text,
      description: Description.rich_text[0]?.plain_text || '',
      tags: Tags.multi_select,
    }
  })

  return { main: data[0], list: data.filter((_, i) => i !== 0) }
}

export default async (req, res) => {
  return getDatabase()
}
