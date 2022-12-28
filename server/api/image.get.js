import imgur_client from '../utils/imgur'

export default defineEventHandler(async (event) => {
  const { hash } = getQuery(event)
  if (!hash) {
    return { msg: 'Hash Required' }
  }

  const response = await imgur_client.getImage(hash)
  return response
})