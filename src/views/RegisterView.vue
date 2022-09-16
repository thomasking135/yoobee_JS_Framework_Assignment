<template>
  <div
    class="background-image"
    :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }"
  >
    <div class="register">
      <h1>Sign Up</h1>
      <form class="registerForm" @submit.prevent="onRegister" novalidate>
        <div class="registerForm__container">
          <input
            class="registerFormInput"
            type="email"
            placeholder="Email Address"
            name="email"
            v-model="email"
            required
          />
          <input
            class="registerFormInput"
            type="username"
            placeholder="Username"
            name="username"
            v-model="username" @keyup.enter="addUser"
            required
          />

          <button type="submit" id="submitSignUp">Sign Up</button>
        </div>

        <div class="registerForm__container">
          <span class="account"
            ><a href="/login">Already have an account?</a></span
          >
        </div>
      </form>
    </div>
    <div v-if="!formIsValid">Please enter a valid email and username</div>
        <li v-for="user of users" :key="user.id">{{ user.username }}</li>
  </div>
</template>

<style>
@import "../assets/styles/main.css";
</style>

<script>
import backgroundUrl from "../assets/images/LogInSignUpDesktop.jpg";
import axios from "axios";
const baseURL = "http://localhost:3000/users"

export default {
  data() {
    return {
      backgroundUrl,
      email: '',
      username: '',
      formIsValid: true,
      users: [],
      userAdded: false
    };
  },
   async created(){
    try {
      const res = await axios.get(baseURL);
      this.users = res.data;
    } catch(e){
      console.error(e);
    }
  },
  methods: {
    onRegister() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.username.length < 1
      ) {
        this.formIsValid = false;
        return;
      }
    },

      async addUser() {
      const res = await axios.post(baseURL, { email: this.email, username: this.username });
      this.users = [...this.users, res.data];
      this.username = '';
      this.email = '';

      this.userAdded = true;

      if (this.userAdded == true){
        window.location.href = "/login";
      }
    }
    
  },
};
</script>
