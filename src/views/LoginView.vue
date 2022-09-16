<template>
  <div class="background-image" :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }">
    <div class="login">
    <h1>Login</h1>  

    <form class="loginForm" @submit.prevent="submitForm" novalidate>
      <div class="loginForm__container">
        <input class="loginFormInput" type="email" placeholder="Email Address" name="email" v-model.trim="email" required>
        <input class="loginFormInput" type="text" placeholder="Username" name="username" v-model.trim="username" required>
            
        <button type="submit" id="submitLogin">Login</button>
      </div>

      <div class="loginForm__container">
        <span class="signUp"><a href="/register">Don't have an account?</a></span>
      </div>
    </form>
    </div>
    <!-- <div class="alert" v-if="loginSuccess">Logged in successfully</div> -->
    <div v-if="!formIsValid">Please enter a valid email and username</div>
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
        formIsValid: true
       // loginSuccess: false,
      };
    },
    methods: {
      submitForm() {
        this.formIsValid = true;
        if (this.email === '' || !this.email.includes('@') || this.username.length <1) {
          this.formIsValid = false;
          return;
        }

           //GET
          axios.get('http://localhost:3000/users')
          .then((res) => {handleResult(res)})
          .catch((err) => console.log(err))

          function handleResult(data) {
            console.log(data);
          }

          //POST
          // axios.post('http://localhost:3000/users', {
          // email: 'john@smith.com',
          // username: 'john'
          // })
          // .then((response) => {
          //   console.log(response);
          // }, (error) => {
          //   console.log(error);
          // });

      //   axios.get('http://localhost:3000/users')
      //   .then((res) => {handleResult(res)})
      //   .catch((err) => console.log(err))

      //   function handleResult(data) {
      //     console.log(data);
      //   }
      
      //   axios.post('http://localhost:3000/users', this.email, this.username)
      //   .then((response) => {
      //   console.log(response);
      //   }, (error) => {
      //     console.log(error);
      // });
    }
      // login: async function() {
      //   const auth = { email: 'this.email', username: 'this.username' };
      //   const url = 'https://json.extendsclass.com/bin/4e1287d46a64';
      //   this.success = false;
      //   this.error = null;

      //   try {
      //     const res = await axios.get(url, { auth }).then(res => res.data);
      //     this.success = true;
      //     console.log(res);
      //   } catch (err) {
      //     this.error = err.message;
      //   }
      // }
    //   onLogin() {
    // //   //   axios.post('https://jsonplaceholder.typicode.com/users',
    // //   //   {email: this.email, username: this.username },
    // //   //   ).then(response => {
    // //   //     this.loginSuccess = true;
    // //   //     console.log(response);
    // //   //     console.log(this.email + ' ' + this.username);

    // //   //     //if login form is validated, this directs the user to the landing page.
    // //   //     if (this.loginSuccess == true){
    // //   //       window.location.href = "/";
    // //   //     }
    // //   //   });
  
    
    }
  }

  //   // //GET
  axios.get('http://localhost:3000/users')
  .then((res) => {handleResult(res)})
  .catch((err) => console.log(err))

  function handleResult(data) {
    console.log(data);
  }

  //POST
  axios.post('http://localhost:3000/users', {
  email: 'john@smith.com',
  username: 'john'
  })
  .then((response) => {
    console.log(response);
  }, (error) => {
    console.log(error);
  });
  
</script>