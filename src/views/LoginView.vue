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
        <br><br>
        <div class="centering">
        <div class="loginForm__container">
          <span class="signUp"
            ><div class="tooltip">Need answers?
        <span class="tooltiptext"><router-link to="/about">Click here to learn more</router-link></span>
        </div></span
          >
        </div>
        </div>
      </form>
    </div>
    <div v-if="!formIsValid">Please enter a valid email and username</div>
    <div v-if="!userDetailsIsValid">Email and/or username is incorrect</div>

  </div>

  

</template>



<style>
@import "../assets/styles/main.css";

.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted blue;
  margin-left:auto;
  margin-right: auto;
  font-weight: bold;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  float: right;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

.centering{
  margin-left: auto;
  margin-right: auto;
  float: right;
}
</style>

<script>
import backgroundUrl from "../assets/images/LogInSignUpDesktop.jpg";
import axios from "axios";
const baseURL = "http://localhost:3000/users"
export default {
  name: 'login',
  data() {
    return {
      backgroundUrl,
      email: "",
      username: "",
      users: [],
      url: 'http://localhost:3000/users',
      formIsValid: true,
      userDetailsIsValid: true
    };
  },
  mounted() {
    axios.get(this.url).then((response) => {
      this.users = response.data
    })
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

      for (let i=0; i<=this.users.length; i++) {
        if (this.username == this.users[i].username){
          console.log('yay');
          window.location.href = "/";
        }
        if (this.email == this.users[i].email) {
          window.location.href = "/";
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
