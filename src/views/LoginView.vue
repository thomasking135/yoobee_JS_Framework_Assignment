<template>
  <div class="background-image" :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }">
    <div class="login">
    <h1>Login</h1>  

    <form>
      <div class="container">
        <label for="email"><b>Email Address</b></label>
        <input type="text" placeholder="Email Address" name="email" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Password" name="psw" required>
            
        <button type="submit">Login</button>
      </div>

      <div class="container">
        <span class="signUp"><a href="/register">Don't have an account?</a></span>
        <span class="psw"><a href="/register">Forgot password?</a></span>
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

.login {
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

form {
  border: none;
}

input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
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

button:hover {
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

.container {
  padding: 16px;
  border: none;
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

span.signUp {
  float: left;
  padding-top: 16px;
  text-align: center;
  font-size: 14px;
  font-family: lato, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #303030;
}

span.signUp a {
  color: #303030;
}

span.signUp a:hover a:visited{
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