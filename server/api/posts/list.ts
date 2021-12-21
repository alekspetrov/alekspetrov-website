import { foramatDate } from '../../../utils/dateToReadable'
import { fetchPosts } from '../../../utils/notionApi'

const getPosts = async () => {
  const results = await fetchPosts()
  const data = results.map(post => {
    return {
      id: post.id,
      crated_at: foramatDate(post.created_time),
      title: post.properties.Name.title[0].plain_text,
      desctiption: post.properties.Description.rich_text[0].plain_text || '',
      tags: post.properties.Tags.multi_select,
    }
  })

  return data
}

export default async (req, res) => {
  return getPosts()
}
