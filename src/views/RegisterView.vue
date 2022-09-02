<template>
  <div class="background-image" :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }">
    <div class="register">
      <h1>Sign Up</h1>  
      <form class="registerForm">
        <div class="registerForm__container">
          <input class="registerFormInput" type="text" placeholder="Email Address" name="email" required>
          <input class="registerFormInput" type="password" placeholder="Password" name="psw" required>
          <input class="registerFormInput" type="password" placeholder="Confirm Password" name="psw" required>
              
          <button type="submit" id="submitSignUp">Sign Up</button>
        </div>

        <div class="registerForm__container">
           <span class="account"><a href="/login">Already have an account?</a></span>
        </div>
        
      </form>
    </div>
  </div>
</template>



<style>
@import '../assets/styles/main.css';
</style>

<script>
import backgroundUrl from "../assets/images/LogInSignUpDesktop.jpg";

export default {
  data() {
    return {
      backgroundUrl,
    };
  },
};
</script>