import { foramatDate } from '../../../utils/dateToFormat'
import { fetchTable } from '../../../utils/notionApi'

const getTable = async () => {
  const data = await fetchTable()

  const result = data.map((post) => {
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

  return { main: result[0], list: result.filter((_, i) => i !== 0) }
}

export default async (req, res) => {
  return getTable()
}
