import imgur_client from '../utils/imgur'
const ALBUM = process.env.NUXT_IMGUR_ALBUM_ID

export default defineEventHandler(async () => {
  const response = await imgur_client.getAlbum(ALBUM)
  return response.data
})