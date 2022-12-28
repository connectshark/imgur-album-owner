export default function () {
  const loading = ref(false)
  const deleteImage = async (hash) => {
    loading.value = true
    await useFetch('/api/image', {
      method: 'delete',
      body: {
        hash: hash
      }
    })
    loading.value = false
  }

  const uploadImage = async (base64) => {
    loading.value = true
    await useFetch('/api/image', {
      method: 'post',
      body: {
        base64: base64
      }
    })
    loading.value = false
  }

  return {
    loading,
    deleteImage,
    uploadImage
  }
}