import imgur_client from '../utils/imgur'

export default defineEventHandler(async (event) => {
  const { hash } = await readBody(event)
  if (!hash) {
    return { msg: 'Hash Required' }
  }

  const response = await imgur_client.deleteImage(hash)
  return response
})