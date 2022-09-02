<template>

    <div class="create">
      
    <h1>Create Event</h1>  
    
      <div class="centerMessaging">
        <img class="float" src="../assets/icons/uploadImage.png" alt="upload" >
        <br><br><p class="imageUpload">Click to upload image</p>
      </div>
    </div>
  
  </template>
  
  
  
  <style>
  h1{
    text-align: center;
    color: black;
    padding: 10%;
  }

  .float {
    float: right;
  }
    
  
  .create { 
    margin-left: auto;
    margin-right: auto;
    color: black;
    text-align: center;
    padding: 2%;


  }

  .imageUpload{
    margin-left: auto;
    margin-right: auto;
    position:justify;
    color:white;
    text-align: auto;
    
  }
  .centerMessaging {
  padding: 40px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white ;
  font-size: 200%;
  font-weight: bold;
  background-color: lightgray;
  width: 100%;
  height: 13%;
  text-align: center;
  
}
  </style>