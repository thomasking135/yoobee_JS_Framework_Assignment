<template>
  <div
    class="background-image"
    :style="{ backgroundImage: 'url(' + backgroundUrl + ')' }"
  >
    <div class="register">
      <h1 class="title--login">Sign Up</h1>
      <form class="registerForm" @submit.prevent="onRegister" novalidate>
        <div class="registerForm__container">
          <input
            class="registerFormInput"
            type="email"
            placeholder="Email Address"
            name="email"
            v-model="email"
            required
          />
          <input
            class="registerFormInput"
            type="username"
            placeholder="Username"
            name="username"
            v-model="username" @keyup.enter="addUser"
            required
          />

          <button type="submit" id="submitSignUp">Sign Up</button>
        </div>

        <div class="registerForm__container">
          <span class="account"
            ><a href="/login">Already have an account?</a></span
          >
        </div>
      </form>
    </div>
    <div v-if="!formIsValid">Please enter a valid email and username</div>
     <div v-if="nameTaken">This username and/or email has been taken, please try another one.</div>
  </div>
</template>

<style>
/*All style files are entered into the 'style.scss' file and converted into css into the 'style.css' file*/
@import "../assets/styles/style.css";
</style>

<script>
import backgroundUrl from "../assets/images/LogInSignUpDesktop.jpg";
import axios from "axios";
const baseURL = "http://localhost:3000/users"

export default {
  data() {
    return {
      backgroundUrl,
      email: '',
      username: '',
      formIsValid: true,
      users: [],
      userAdded: false,
      nameTaken: false
    };
  },
   async created(){
    try {
      const res = await axios.get('http://localhost:3000/users');
      this.users = res.data;
    } catch(e){
      console.error(e);
    }
  },
  methods: {
    onRegister() {
      this.formIsValid = true;
      if (
        this.email === "" ||
        !this.email.includes("@") ||
        this.username.length < 1
      ) {
        this.formIsValid = false;
        return;
      }

    },

      async addUser() {

      for (let i=0; i<this.users.length; i++){
        if (this.username === 'justina' || this.email === 'justina@ho.com'){
          this.nameTaken = true;
          this.userAdded == false;
          break;
        }
        if (this.username === 'keegan' || this.email === 'keegan@dufty.com'){
          this.nameTaken = true;
          this.userAdded == false;
          break;
        }
        if (this.username === 'thom' || this.email === 'thom@king.com'){
          this.nameTaken = true;
          break;
        } else {
          const res = await axios.post(baseURL, { email: this.email, username: this.username });
          this.users = [...this.users, res.data];
          this.username = '';
          this.email = '';
          this.userAdded == true
          window.location.href = "/login";
          break;
        } 
      }
      
    }
    
  },
};
</script>
