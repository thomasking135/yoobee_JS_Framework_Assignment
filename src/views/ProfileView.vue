<template>
  
    <ProfileForm
      @image-upload="uploadFile"
      :src="src"
      :isUploading="uploading"
      @remove-image="removeImage"
    />
    
     <br><br>
<p>Username: {{ message }}</p>
<input v-model="message" placeholder="Username" />
<br><br>
<span>Bio:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<textarea v-model="message" placeholder="I love to create event"></textarea>
 
</template>

<script>
import Axios from "axios";
import ProfileForm from "@/components/ProfileForm.vue";

const cloudName = "dqyhsobqa";
const unsignedUploadPreset = "ewvntos9";
const cloudinaryLink = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

export default {
  name: "App",
  components: {
    ProfileForm
  },
  data() {
    return {
      src: "",
      uploading: false
    };
  },
  methods: {
    uploadFile(fileData) {
      this.uploading = true;
      const formData = new FormData();
      formData.append("file", fileData);
      formData.append("upload_preset", unsignedUploadPreset);
      Axios.post(cloudinaryLink, formData).then(res => {
        this.src = res.data.url;
        this.uploading = false;
      });
    },
    removeImage() {
      this.src = "";
    }
  }
};
</script>







