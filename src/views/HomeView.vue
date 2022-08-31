<template>


  <img src="../assets/images/LandingPage.jpg" alt="Landing page" style="width:100%;">
  <div class="centerMessage">Kia ora, Hap is where it's at!<br>
    <router-link to="/create"><button class="createEvent">Create a new event</button></router-link></div>  
  
  
  

</template>

<style>

.container {
  padding-top: -100px;
  position: absolute;
  text-align: center;
  color: white;
}

.centerMessage {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: palegoldenrod ;
  font-size: 300%;
  font-weight: bold;
}

.createEvent {
  background-color: #08BDB6;
  text-align: center;
  font-size: 14px;
  font-family: lato, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #303030;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
 
}

.createEvent:hover {
  background-color: #48B1BF;
  transform: scale(1.1);
  border-radius: 26%;
}

.home {
  padding-top: 200px;
}


</style>
