<template>
  <div
    class="background-image"
    :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }"
  >
    <div class="login">
      <h1>Login</h1>

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
        </div>

        <div class="loginForm__container">
          <span class="signUp"
            ><a href="/register">Don't have an account?</a></span
          >
        </div>
      </form>
    </div>
    <div v-if="!formIsValid">Please enter a valid email and username</div>

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
      email: "",
      username: "",
      formIsValid: true,
    };
  },
  mounted() {
    fetch(baseURL)
    .then(res => res.json())
    .then(data => this.users = data)
    .catch(err => console.log(err.message))
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
      
    }
  },
};
</script>
