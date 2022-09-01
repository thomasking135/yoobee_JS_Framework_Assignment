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
* {
margin: 0;
padding: 0;
}

h1{
  text-align: center;
  font-size: 40px;
  font-family: lato, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
}

.register {
  padding-top: 300px;
  text-align: left;
  margin-left: 25%;
  margin-right: 25%;
}

.background-image {
  background-size: cover;
  width: 100%;
  height: 100vh;
}

.registerForm {
  border: none;
}

.registerForm__container{
  padding: 16px;
  border: none;
}


.registerFormInput {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

#submitSignUp {
  background-color: #08BDB6;
  text-align: center;
  font-size: 14px;
  font-family: lato, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #303030;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

#submit:hover {
  background-color: #48B1BF;
}

.SignUpBtn {
  color: #303030;
  text-align: center;
  font-size: 14px;
  font-family: lato, sans-serif;
  font-weight: 500;
  font-style: normal;
  text-decoration: underline;
  width: auto;
  padding: 10px 18px;
  background-color: transparent;
}

.SignUpBtn:hover {
  color: #303030;
  width: auto;
  padding: 10px 18px;
  background-color: transparent;
}

span.psw {
  float: right;
  padding-top: 16px;
  text-align: center;
  font-size: 14px;
  font-family: lato, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #303030;
}

span.psw a {
  color: #303030;
}

span.psw a:hover a:visited{
  color: #303030;
}

span.account {
  float: left;
  padding-top: 16px;
  text-align: center;
  font-size: 14px;
  font-family: lato, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #303030;
}

span.account a {
  color: #303030;
}

span.account a:hover a:visited{
  color: #303030;
}

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