
<template>
  <NuxtLayout>
    <form @submit.prevent="uploadHandler">
      <div class=" relative group">
        <label for="image" :class="{ 'opacity-70': dragover }"
          class="block bg-stone-300 transition-opacity py-7 text-center rounded-xl shadow-xl group-hover:opacity-70 mb-10">上傳區</label>
        <input @change="fileHandler" required type="file" @dragover="dragover = true" @dragleave="dragover = false"
          @drop="dragover = false" class="top-0 cursor-pointer left-0 opacity-0 absolute w-full h-full" id="image"
          accept="image/png, image/jpg, image/jpeg">
      </div>
      <div v-if="file">
        <p>name: {{ file.name }}</p>
        <p>
          <button :disabled="imageLoading" class=" bg-stone-800 text-white rounded-2xl p-2 hover:opacity-80 disabled:bg-stone-400 transition" type="submit">上傳圖片</button>
        </p>
      </div>
    </form>
    <div>
      <p class=" text-center" v-if="albumLoading">
        <i class='bx bx-loader bx-spin bx-md' ></i>
      </p>
      <ul>
        <li class="align-middle inline-block w-1/4 " v-for="image in album" :key="image.id">
          <figure>
            <img :src="image.link" :alt="image.id">
          </figure>
          <div>
            <button :disabled="imageLoading" class="bg-stone-800 text-white rounded-2xl p-2 hover:opacity-80 disabled:bg-stone-400 transition" type="button"
              @click="deleteImage(image.deletehash)">刪除</button>
          </div>
        </li>
      </ul>
    </div>
  </NuxtLayout>
</template>

<script setup>
const dragover = ref(false)

const {
  loading: albumLoading,
  album,
  getAlbum
} = useAlbum()

const {
  loading: imageLoading,
  uploadImage,
  deleteImage
} = useImage()

watch(imageLoading, async value => {
  if (!value) {
    await getAlbum()
  }
})

const uploadHandler = () => {
  const reader = new FileReader()
  reader.onloadend = async e => {
    const base64 = e.target.result.split(',')[1]
    await uploadImage(base64)
    file.value = null
  }
  reader.readAsDataURL(file.value)
}

const file = ref(null)
const fileHandler = (e) => {
  const img = e.target.files[0]
  file.value = img
}
</script>