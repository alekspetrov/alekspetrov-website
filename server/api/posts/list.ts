import { foramatDate } from '../../../utils/dateToFormat'
import { fetchApi } from '../../../utils/api'

interface ITable {
  id: string
  date: string
  title: string
  description: string
  tags: string[]
}

const getTable = async () => {
  const res = await fetchApi('pages')

  const data = res.map((post) => {
    const { Name, Description, Tags } = post.properties

    return {
      id: post.id,
      date: foramatDate(post.created_time, true),
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
