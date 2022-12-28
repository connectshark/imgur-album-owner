import pkg from 'imgur'
const { ImgurClient } = pkg

const imgur_client = new ImgurClient({
  refreshToken: process.env.NUXT_IMGUR_REFRESH_TOKEN,
  clientId: process.env.NUXT_IMGUR_CLIENT_ID,
  clientSecret: process.env.NUXT_IMGUR_CLIENT_SECRET
})

export default imgur_client