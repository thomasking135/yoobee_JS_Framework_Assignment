<template>

  <router-link to="/"><img alt="Vue logo" src="./assets/logo.png" ></router-link><nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|  
    <router-link to="/profile">Profile</router-link>|
    <router-link to="/register">Register</router-link>|
    <router-link to="/login">Login/Logoff</router-link>
    

  </nav>
  <router-view/>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  
  float: right;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

img {
  width: 5%;
  float: left;
}
</style>
