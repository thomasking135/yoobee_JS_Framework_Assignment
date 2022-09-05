<template>

    <div class="create">
      
    <h1 class="createEventHeader">Create Event</h1>  
    
      <div class="centerMessaging">
        <img class="float" src="../assets/icons/uploadImage.png" alt="upload" >
        <br><br><p class="imageUpload">Click to upload image</p>
      </div>

      <form >
  <div class="formBorder">
  <label  for="date">Starts on:</label><br>
  <input type="date" id="sdate" name="sdate" value="Start Date"><br>
  <label for="edate">Ends on:</label><br>
  <input type="date" id="edate" name="edate" value="End Date">
  <br>
  <label for="address">Address:</label><br>
  <input type="text" id="address" name="address" value="Address">
  <br>
  <label for="category">Category:</label><br>
  <select name="category" id="category">
  <option value="picnic">Picnic</option>
  <option value="dance">Dance</option>
  <option value="tennis">Tennis</option>
  <option value="concert">Concert</option>
</select>
  <br>
  <label for="privacy">Privacy:</label><br>
  <select name="privacy" id="privacy">
  <option value="public">Public</option>
  <option value="private">Private</option>
  
</select>
  </div>
  <br><br>
  <div class="formBuilder">
    <textarea id="description" rows="4" cols="50" placeholder="Describe your event here..."></textarea>
  
    
  
    <br><br><button class="postit">Post Event</button>
    <button class="cancelit">Cancel</button>
  </div>  
</form> 

    </div>

   
  
  </template>
  
  
  
  <style>
  @import '../assets/styles/main.css';
  .formBorder{
  border: 2px solid blue; 
  margin-top: 10%;
  display: inline-block;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 1%;
  padding-bottom: 1%; 
}



#address{
  width: 353px;
}

#category, #privacy {
  width: 360px;
}

#description{
  border: 2px solid blue; 
  display: inline-block;
  padding-left: 14%;
  padding-right: 14.6%;
  padding-top: 1%;
  padding-bottom: 1%; 
}

.postit {
  width: 100px;
  height: 30px;
  float: right;
  margin-left: 10px;
}

.postit:hover {
  transform: scale(1.1);
  background-color: #06bdb6;
}

.cancelit {
  width: 100px;
  height: 30px;
  float: right;
  color: red;
  border: 2px solid red;
}

.cancelit:hover {
  transform: scale(1.1);
  background-color: red;
  color: white
}
  </style>