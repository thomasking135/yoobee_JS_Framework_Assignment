<template>
  <h1 class="title">Profile</h1>
  <label for="image-upload">
    <img class="upload" :src="src" />
  </label>
  <p>Select an image above</p>
  <input v-show="false" type="file" id="image-upload" @change="handleUpload" />
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const src = ref("https://via.placeholder.com/300");
    const handleUpload = (e) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        src.value = event.target.result;
      };
      reader.readAsDataURL(e.target.files[0]);
    };
    return { src, handleUpload };
  },
};
</script>

<style>
.upload {
  margin-top: 20px;
  max-width: 20%;
  border-radius: 50%;
  border: 1px solid #303030;
}
</style>
