<template>
  <h1 class="title">Profile</h1>
  <div class="ProfileInfoContainer">
    <div class="ProfilePicContainer">
      <ProfileForm
        @image-upload="uploadFile"
        :src="src"
        :isUploading="uploading"
        @remove-image="removeImage"
      />
    </div>
    <br /><br />
    <div class="ProfileUserDeatilsContainer">
      <h3>{{ users.username }}</h3>
      <p>Username: {{ message }}</p>
      <input v-model="message" placeholder="Username" />
      <br /><br />
      <span>Bio:</span>
      <p style="white-space: pre-line">{{ message }}</p>
      <textarea
        v-model="message"
        placeholder="I love to create event"
      ></textarea>

      <br /><br />

      <router-link to="/create"
        ><button id="createEvent" class="button--primary">
          Create a new event
        </button></router-link
      >
      <router-link to="/login"
        ><button class="button--secondary">Login</button></router-link
      >
      <br /><br />
    </div>
  </div>
  <h2>Contacts</h2>

  <table class="center">
    <tr>
      <th>Person</th>
      <th>Phone</th>
      <th>Email</th>
    </tr>
    <tr>
      <td>Justina Ho</td>
      <td>021345678</td>
      <td><a href="mailto:justina@gmail.com">justina@gmail.com</a></td>
    </tr>
    <tr>
      <td>Keegan Dufty</td>
      <td>0212345678</td>
      <td><a href="mailto:keegan@hotmail.com">keegan@hotmail.com</a></td>
    </tr>
    <tr>
      <td>Thomas King</td>
      <td>0274567832</td>
      <td><a href="mailto:thomasking135@gmail.com">thomas@gmail.com</a></td>
    </tr>
  </table>

  <FooterSection />
</template>

<script>
import Axios from "axios";
import ProfileForm from "@/components/ProfileForm.vue";
import FooterSection from "@/components/FooterSection.vue";

const cloudName = "dqyhsobqa";
const unsignedUploadPreset = "ewvntos9";
const cloudinaryLink = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

export default {
  name: "App",
  components: {
    ProfileForm,
    FooterSection,
  },
  data() {
    return {
      src: "",
      uploading: false,
      users: [],
      username: "",
    };
  },
  async created() {
    try {
      const res = await Axios.get(`http://localhost:3000/users`);
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    uploadFile(fileData) {
      this.uploading = true;
      const formData = new FormData();
      formData.append("file", fileData);
      formData.append("upload_preset", unsignedUploadPreset);
      Axios.post(cloudinaryLink, formData).then((res) => {
        this.src = res.data.url;
        this.uploading = false;
      });
    },
    removeImage() {
      this.src = "";
    },
  },
};
</script>

<style>
.ProfileInfoContainer {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 50px;
}
.ProfilePicContainer {
  display: flex;
  flex-direction: column;
}

.ProfileUserDeatilsContainer {
  display: flex;
  flex-direction: column;
}
table {
  padding-top: 10px;
  font-family: arial, sans-serif;
  border-collapse: collapse black 1px;
  width: 80%;
  left: 50%;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

#createEvent {
  background-color: #08bdb6;
  text-align: center;
  font-size: 14px;
  font-family: lato, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #303030;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
}

#createEvent:hover {
  background-color: #48b1bf;
}
</style>
