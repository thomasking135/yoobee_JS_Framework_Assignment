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
        ><button class="button--secondary profileLoginBtn">
          Login
        </button></router-link
      >
      <br /><br />
    </div>
  </div>

  <h3 class="center suggestedEvents title--secondary">My Events</h3>
  <p class="profileTabPara">
    Unfortunately there are no events to dislplay at the moment.
  </p>
  <div class="profileTabButtons">
    <router-link to="/"
      ><button class="button--secondary viewEventsProfile">
        View Events
      </button></router-link
    >
    <router-link to="/create"
      ><button class="button--secondary createEventsBtnProfile">
        Create Your Own Event
      </button></router-link
    >
  </div>
  <FooterSection />
</template>

<script>
import Axios from "axios";
import ProfileForm from "@/components/ProfileForm.vue";
import FooterSection from "@/components/FooterSection.vue";
import LoginView from "../views/LoginView.vue";

//const baseURL = "http://localhost:3000/users";

const cloudName = "dqyhsobqa";
const unsignedUploadPreset = "ewvntos9";
const cloudinaryLink = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

export default {
  name: "App",
  components: {
    ProfileForm,
    FooterSection,

    // eslint-disable-next-line vue/no-unused-components
    LoginView,
  },
  data() {
    return {
      src: "",
      uploading: false,
      users: [],
      username: "",
      events: [],
    };
  },

  /*mounted() {
    Axios.get(baseURL).then((response) => {
      this.users.username = response.data;
    });
  },
*/
  /*async created() {
    try {
      const res = await Axios.get(baseURL);
      this.items = res.data;
    } catch (error) {
      console.log(error);
    }
  },*/

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

.profileLoginBtn {
  width: 100%;
}

.center {
  margin-left: auto;
  margin-right: auto;
}

.suggestedEvents {
  color: #08bdb6;
  border-bottom: 1px solid #08bdb6;
}

.profileTabPara {
  margin-top: 50px;
}
.profileTabButtons {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}

.viewEventsProfile {
  width: 30%;
}
.createEventsBtnProfile {
  width: 30%;
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
