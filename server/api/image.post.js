import imgur_client from '../utils/imgur'
const ALBUM = process.env.NUXT_IMGUR_ALBUM_ID

export default defineEventHandler(async (event) => {
  const { base64 } = await readBody(event)
  if (!base64) {
    return { msg: 'Base64 Required' }
  }
  const response = await imgur_client.upload({
    image: base64,
    type: 'base64',
    album: ALBUM
  })
  return response
})