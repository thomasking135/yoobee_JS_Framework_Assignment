<template>
  <div class="background-image" :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }">
    <div class="register">
      <h1>Sign Up</h1>  
      <form class="registerForm" @submit.prevent="onRegister">
        <div class="registerForm__container">
          <input class="registerFormInput" type="email" placeholder="Email Address" name="email" v-model="email" required>
          <input class="registerFormInput" type="password" placeholder="Password" name="psw" v-model="password" required>
          <input class="registerFormInput" type="password" placeholder="Confirm Password" name="psw" v-model="confirmedPassword" required>
              
          <button type="submit" id="submitSignUp">Sign Up</button>
        </div>

        <div class="registerForm__container">
           <span class="account"><a href="/login">Already have an account?</a></span>
        </div>
        
      </form>
    </div>
    <div class="alert" v-if="registerSuccess">Logged in successfully</div>
    <div class="alert" v-if="registerFail">Error!</div>
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
      confirmedPassword:'',
      registerSuccess: false,
      registerFail: false,
    };
  },
  methods: {
      onRegister() {
        axios.post('https://jsonplaceholder.typicode.com/users',
        {email: this.email, password: this.password, confirmedPassword: this.confirmedPassword },
        ).then(response => {
          
          //if both passwords are the same and register form is validated, this directs the user to the login page.
          if (this.password == this.confirmedPassword){
            this.registerSuccess = true;
            this.registerFail = false;
            if (this.registerSuccess == true){
              window.location.href = "/login";
            }
          } else {
            this.registerFail = true;
          }

          console.log(response);
          console.log(this.email + ' ' + this.password + ' ' + this.confirmedPassword);
    
        });
      }

    }
};
</script>