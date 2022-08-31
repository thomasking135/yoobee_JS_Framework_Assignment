<template>
<!--Nav router links-->
  
  <router-link to="/"><img id="logo" alt="Vue logo" src="./assets/logo/logo-full.png" style="width: 300px; margin-top: 40px"></router-link>
  <nav>  
    <router-link to="/"><img id="homes" alt="Home" src="./assets/icons/home.png" style="width: 40px; padding-right: 20px; padding-right: 20px; padding-top: 40px;"></router-link> 
    <router-link to="/about"><img id="info" alt="About" src="./assets/icons/info.png" style="width: 40px; padding-right: 20px; padding-top: 40px;"></router-link> 
    <router-link to="/create"><img id="plus" alt="Create Event" src="./assets/icons/add.png" style="width: 40px; padding-right: 20px; padding-top: 40px;"></router-link> 
    <router-link to="/profile"><img id="user" alt="Profile" src="./assets/icons/user.png" style="width: 40px; padding-right: 20px; padding-top: 40px;" ></router-link> 
    <router-link to="/register">Register</router-link>|
    <router-link to="/login">LI/LO</router-link>
  </nav>
  <router-view/>
</template>


<!--Style guide-->
<style>
@import './assets/styles/main.css';


#homes:hover {
transform: scale(1.1);
filter: opacity(0.4) drop-shadow(0 0 0 blue);
}

#info:hover {
transform: scale(1.1);
filter: opacity(0.4) drop-shadow(0 0 0 blue);
}

#plus:hover {
transform: scale(1.1);
filter: opacity(0.4) drop-shadow(0 0 0 blue);
}

#user:hover {
transform: scale(1.1);
filter: opacity(0.4) drop-shadow(0 0 0 blue);
}

#logo:hover {
transform: scale(1.1);
filter: opacity(0.4) drop-shadow(0 0 0 blue);
}
</style>



