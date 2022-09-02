<template>
<!--Nav router links-->
  
  <router-link to="/"><img id="logo" alt="Vue logo" src="./assets/logo/logo-full.png" style="width: 300px; margin: 40px"></router-link>
  <nav class="icon-bar">  
    <!-- <router-link to="/"><img id="homes" alt="Home" src="./assets/icons/home.png" style="width: 40px; padding-right: 20px; padding-right: 20px; padding-top: 40px;"></router-link> 
    <router-link to="/about"><img id="info" alt="About" src="./assets/icons/info.png" style="width: 40px; padding-right: 20px; padding-top: 40px;"></router-link> 
    <router-link to="/create"><img id="plus" alt="Create Event" src="./assets/icons/add.png" style="width: 40px; padding-right: 20px; padding-top: 40px;"></router-link>  -->
    <router-link to="/">
      <div class="home-icon" id="homes" alt="Home">
        <img src="./assets/icons/home.png" alt="home hover">
          <img src="./assets/icons/homeHover.png" class="img-top" alt="home">
      </div>
    </router-link>

    <router-link to="/about">
      <div class="info-icon" id="info" alt="About">
        <img src="./assets/icons/info.png" alt="home hover">
          <img src="./assets/icons/infoHover.png" class="img-top" alt="home">
      </div>
    </router-link> 

    <router-link to="/create">
      <div class="add-icon" id="plus" alt="Create Event">
        <img src="./assets/icons/add.png" alt="create hover">
          <img src="./assets/icons/addHover.png" class="img-top" alt="create">
      </div>
    </router-link> 


    <div class="dropdown">
    <router-link to="/profile">
     <div class="user-icon" id="plus" alt="Create Event">
      <img src="./assets/icons/user.png" alt="create hover">
        <img src="./assets/icons/userHover.png" class="img-top" alt="create">
    </div>
      <div class="dropdown-content">
        <a><router-link to="/register">Sign Up</router-link></a>
        <a><router-link to="/login">Log In</router-link></a>
      </div>
    </router-link> 
    </div>
    
  </nav>
  <router-view/>
</template>


<!--Style guide-->
<style>
@import './assets/styles/main.css';

.icon-bar {
  margin-left: 65%;
}
.home-icon {
  width: 900px;
  position: relative;
  
  /* display: inline-block; */
}
.home-icon .img-top {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  
}
.home-icon:hover .img-top {
  display: inline;
}

.info-icon {
  width: 900px;
  position: relative;
  /* display: inline-block; */
}
.info-icon .img-top {
  display: none;
  position: absolute;
  top: 0;
  left: 45px;
  z-index: 99;
}
.info-icon:hover .img-top {
  display: inline;
}

.add-icon {
  width: 900px;
  position: relative;
  /* display: inline-block; */
}
.add-icon .img-top {
  display: none;
  position: absolute;
  top: 0;
  left: 90px;
  z-index: 99;
}
.add-icon:hover .img-top {
  display: inline;
}

.user-icon {
  width: 900px;
  position: relative;
  /* display: inline-block; */
}
.user-icon .img-top {
  display: none;
  position: absolute;
  top: 0;
  left: 0px;
  z-index: 99;
}
.user-icon:hover .img-top {
  display: inline;
}



.dropbtn {
  color: white;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
  width: 45px;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-top: 47px;
  margin-right: 500px;
  left: 70%;
  right: auto;
  transform: translateX(-50%);
}

.dropdown-content a {
  color: black;
  padding: 10px 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #303030; color: #08BDB6}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: transparent;}
</style>





