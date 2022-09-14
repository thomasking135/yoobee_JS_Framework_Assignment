<template>
  <div class="background-image" :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }">
    <div class="login">
    <h1>Login</h1>  

    <form class="loginForm" @submit.prevent="onLogin">
      <div class="loginForm__container">
        <input class="loginFormInput" type="email" placeholder="Email Address" name="email" v-model="email" required>
        <input class="loginFormInput" type="text" placeholder="Username" name="username" v-model="username" required>
            
        <button type="submit" id="submitLogin">Login</button>
      </div>

      <div class="loginForm__container">
        <span class="signUp"><a href="/register">Don't have an account?</a></span>
      </div>
    </form>
    </div>
    <div class="alert" v-if="loginSuccess">Logged in successfully</div>
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
        username:'',
        loginSuccess: false,
      };
    },
    methods: {
      // onLogin() {
      //   axios.post('https://jsonplaceholder.typicode.com/users',
      //   {email: this.email, username: this.username },
      //   ).then(response => {
      //     this.loginSuccess = true;
      //     console.log(response);
      //     console.log(this.email + ' ' + this.username);

      //     //if login form is validated, this directs the user to the landing page.
      //     if (this.loginSuccess == true){
      //       window.location.href = "/";
      //     }
      //   });
      // }

    }
  }

  axios.get('https://json.extendsclass.com/bin/4e1287d46a64')
  .then((res) => {handleResult(res)})
  .catch((err) => console.log(err))

  function handleResult(data) {
    console.log(data);
  }

  //  axios.post('https://json.extendsclass.com/bin/4e1287d46a64', {
  //     email: "john@smith.com",
  //     username: "john"
  //   })
  //   .then((res) => {handleResult(res)})
  //   .catch((err) => console.log(err))
  //     function handleResult(data) {
  //     console.log(data);
  //   }

</script>