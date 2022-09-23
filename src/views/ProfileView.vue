<!--KEEGAN DUFTY code-->
<!--Functionality tested by Thomas King-->
<template>
  <h1 class="title--profile">Profile</h1>
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
    <!--User Profile Content area-->
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

      <!--Router Links to Create Event Page and Login-->
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
  <!--Router Links to View Events and Create Own Events-->
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
  <!--Footer-->
  <FooterSection />
</template>

<script>
import Axios from "axios";
import ProfileForm from "@/components/ProfileForm.vue";
import FooterSection from "@/components/FooterSection.vue";

//const baseURL = "http://localhost:3000/users";

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
      events: [],
    };
  },

  //Below is Keegans attempt to draw the username from the json file
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
/*All style files are entered into the 'style.scss' file and converted into css into the 'style.css' file*/
@import "../assets/styles/style.css";
</style>
