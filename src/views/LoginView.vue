<!--JUSTINA HO code-->
<!--Functionality tested by Keegan Dufty-->
<template>
  <div
    class="background-image"
    :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }"
  >
    <div class="login">
      <h1 class="title--login">Login</h1>
      <!--Start of Login form-->
      <form class="loginForm" @submit.prevent="submitForm" novalidate>
        <div class="loginForm__container">
          <input
            class="loginFormInput"
            type="email"
            placeholder="Email Address"
            name="email"
            v-model.trim="email"
            required
          />
          <input
            class="loginFormInput"
            type="text"
            placeholder="Username"
            name="username"
            v-model.trim="username"
            required
          />

          <button type="submit" id="submitLogin">Login</button>
          <!-- <router-link to="/"><button type="submit" id="submitLogin">Guest Login</button></router-link> -->
        </div>

        <div class="loginForm__container">
          <span class="signUp"
            ><a href="/register">Don't have an account?</a></span
          >
        </div>

        <div class="loginForm__container">
          <span class="learnMore"><a href="/about">Learn more!</a></span>
        </div>
      </form>
      <!--End of login form-->
    </div>
    <!--Conditional Login responses with v-if control-->
    <div v-if="!formIsValid">Please enter a valid email and username</div>
    <div v-if="!userDetailsIsValid">Email and/or username is incorrect</div>
  </div>
</template>

<style>
/*All style files are entered into the 'style.scss' file and converted into css into the 'style.css' file*/
@import "../assets/styles/style.css";
</style>

<script>
import backgroundUrl from "../assets/images/LogInSignUpDesktop.jpg";
import axios from "axios";
const baseURL = "http://localhost:3000/users";
export default {
  name: "login",
  data() {
    return {
      backgroundUrl,
      email: "",
      username: "",
      users: [],
      url: "http://localhost:3000/users",
      formIsValid: true,
      userDetailsIsValid: true,
    };
  },
  mounted() {
    axios.get(this.url).then((response) => {
      this.users = response.data;
    });
  },
  methods: {
    submitForm() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.username.length < 1
      ) {
        this.formIsValid = false;
        return;
      }
    // runs through each user in json file to see if they match, if so then it 
    //allows the user to go through to the landing page
      for (let i = 0; i <= this.users.length; i++) {
        if (this.username == this.users[i].username) {
          window.location.href = "/";
        }
        if (this.email == this.users[i].email) {
          window.location.href = "/";
        }
        if (this.username !== this.users.username) {
          this.userDetailsIsValid = false;
        }

        if (this.email !== this.users.email) {
          this.userDetailsIsValid = false;
        }
      }

      //GET
      axios
        .get(baseURL)
        .then((res) => {
          handleResult(res);
        })
        .catch((err) => console.log(err));

      function handleResult(data) {
        console.log(data);
      }
    },
  },
};
</script>
