<template>
  <div class="background-image" :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }">
    <div class="login">
    <h1>Login</h1>  

    <form class="loginForm">
      <div class="loginForm__container">
        <input class="loginFormInput" type="email" placeholder="Email Address" name="email" required>
        <input class="loginFormInput" type="password" placeholder="Password" name="password" required>
            
        <button type="submit" id="submitLogin">Login</button>
      </div>

      <div class="loginForm__container">
        <span class="signUp"><a href="/register">Don't have an account?</a></span>
        <span class="psw"><a href="/register">Forgot password?</a></span>
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