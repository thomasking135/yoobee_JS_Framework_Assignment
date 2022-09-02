<template>
  
  <div class="profile">
   
    
    <div class="profileGrid">
      <div class="ProfileImageContainer">
        <div class="ProfileImage"></div>
        <button class="updateProfileImage" onchange="upload()">Update Image</button>
      </div>
      
    


  <div class="profileDetails">
    <br><br><br><br>  
    <form action="#" method="get" id="myForm"></form>
        <label>Username</label><br>
        <input type="text" id="textbox" name="textfield" /><br><br>
        <label>Bio</label><br>
        <textarea id="textarea" name="textarea" rows="5" cols="33"/><br><br>
        <button type="submit" id="updateProfile" class="submitBio" onclick="change()">Update</button><br><br>
        <router-link to="/login"><button id="logoutProfile" type="submit" class="LogOutBtn">Log Out</button></router-link><br>
      </div>
    </div>
  </div>

  <hr class="profileHR">

</template>



<style>

#logoutProfile:hover {
  background-color: #48B1BF; 
  transform: scale(1.1);
}

#updateProfile:hover {
  background-color: #48B1BF; 
  transform: scale(1.1);
}

.profileHR {
  margin-top: 23em;
  border-top: 2px solid #48B1BF
}

.ProfileImageContainer {
  
  margin-top: 100px;
}

.ProfileImage {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 1px solid black;
  margin-left: -20%;
  margin-top: -10%;
}

.updateProfileImage {
  width: 100px;
  background-color: white;
  border: 1px solid #06beb6;
  padding: 10px;
  margin-top: 10px;
  margin-left: -21%;
  float:left;
}

.profileDetails {
  flex-direction: column;
  float:right;
  margin-top: -20%;
  margin-right: 17%;
  
}

.submitBio {
  background-color: white;
  border: 1px solid #06beb6;
  padding: 10px;
  width: 50%;
  padding: 10px;
}
.LogOutBtn {
  background-color: #06beb6;
  border: 10px solid #06beb6;
  color: #303030;
  padding: 10px;
  width: 50%;
}
h1 {
  text-align: center;
}
.profile {
  padding-top: 200px;
  text-align: justify;
  margin-left: 25%;
  margin-right: 25%;
}
</style>

<script type="application/javascript" src="https://cdn.jsdelivr.net/vue.js"></script>

import { change } from "../assets/JS/views.js";






