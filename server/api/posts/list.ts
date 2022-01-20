import { foramatDate } from '../../../utils/dateToReadable'
import { fetchPosts } from '../../../utils/notionApi'

const getPosts = async () => {
  try {
    const results = await fetchPosts()

    const data = results.map(post => {
      return {
        id: post.id,
        cover: post.properties.Image?.rich_text[0]?.plain_text || null,
        date: foramatDate(post.created_time),
        title: post.properties.Name?.title[0]?.plain_text,
        desctiption:
          post.properties.Description?.rich_text[0]?.plain_text || '',
        tags: post.properties.Tags?.multi_select,
      }
    })

    return { main: data[0], list: data.filter((_, i) => i !== 0) }
  } catch (e) {
    throw new Error('Failed to get posts')
  }
}

export default async (req, res) => {
  return getPosts()
}
