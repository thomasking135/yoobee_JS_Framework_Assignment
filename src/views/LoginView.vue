<template>
  <div class="background-image" :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }">
    <div class="login">
    <h1>Login</h1>  
      <p>Insert login details</p>
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
}

.login {
  padding-top: 100px;
  text-align: justify;
  margin-left: 25%;
  margin-right: 25%;
}

.background-image {
  background-size: cover;
  width: 100%;
  height: 100vh;
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