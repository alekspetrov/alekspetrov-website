import { fetchApi } from '../../../utils/api'
import { IncomingMessage, ServerResponse } from 'http'
import { useBody } from 'h3'

export default async (req: IncomingMessage, res: ServerResponse) => {
  const body = await useBody(req)

  try {
    const response = await fetchApi(`emails/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })

    console.log(response)

    return response
  } catch (error) {
    throw Error('Add email error: ', error.message || error)
  }
}
