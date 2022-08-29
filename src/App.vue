<template>
<!--Nav router links-->
  <router-link to="/"><img alt="Vue logo" src="./assets/images/logoNoText.png" ></router-link><nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|  
    <router-link to="/create">Create Event</router-link>|
    <router-link to="/profile">Profile</router-link>|
    <router-link to="/register">Register</router-link>|
    <router-link to="/login">Login/Logoff</router-link>
    

  </nav>
  <router-view/>
</template>


<!--Style guide-->
<style>
@import './assets/styles/main.css';
</style>
