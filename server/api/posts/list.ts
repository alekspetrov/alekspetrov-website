import { foramatDate } from '../../../utils/dateToFormat'
import { fetchTable } from '../../../utils/notionApi'

const getTable = async () => {
  const response = await fetchTable()

  const data = response.map((post) => {
    const { Image, Name, Description, Tags } = post.properties

    return {
      id: post.id,
      date: foramatDate(post.created_time),
      title: Name.title[0]?.plain_text,
      description: Description.rich_text[0]?.plain_text || '',
      tags: Tags.multi_select,
    }
  })

  return data
}

export default async (req, res) => {
  return getTable()
}
