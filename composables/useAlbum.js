export default function () {
  const loading = ref(false)
  const album = ref([])

  const getAlbum = async () => {
    loading.value = true
    const response = await fetch('/api/album')
    const res = await response.json()
    album.value = res.images
    loading.value = false
  }

  onBeforeMount(getAlbum)

  return {
    loading,
    getAlbum,
    album
  }
}