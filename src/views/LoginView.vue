<template>
  <div class="background-image" :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }">
    <div class="login">
    <h1>Login</h1>  

    <form class="loginForm" @submit.prevent="onCreatePost">
      <div class="loginForm__container">
        <input class="loginFormInput" type="email" placeholder="Email Address" name="email" v-model="email" required>
        <input class="loginFormInput" type="password" placeholder="Password" name="password" v-model="password" required>
            
        <button type="submit" id="submitLogin">Login</button>
      </div>

      <div class="loginForm__container">
        <span class="signUp"><a href="/register">Don't have an account?</a></span>
        <span class="psw"><a href="/register">Forgot password?</a></span>
      </div>
    </form>
    </div>
    <div class="alert" v-if="isSuccess">Logged in successfully</div>
  </div>
</template>



<style>

@import '../assets/styles/main.css';
</style>

<script>
  import backgroundUrl from "../assets/images/LogInSignUpDesktop.jpg";
  import axios from 'axios';
  export default {
    data() {
      return {
        backgroundUrl,
        email:'',
        password:'',
        isSuccess: false,
      };
    },
    methods: {
      onCreatePost() {
        axios.post('https://jsonplaceholder.typicode.com/users',
        {email: this.email, password: this.password },
        ).then(response => {
          this.isSuccess = true;
          console.log(response);
          console.log(this.email + ' ' + this.password);
        });
      }
    }
  };
</script>