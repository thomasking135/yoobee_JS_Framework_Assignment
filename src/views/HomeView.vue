<template>


  <img class="landingImg" src="../assets/images/LandingPage.jpg" alt="Landing page" style="width:100%;">
  <div class="centerMessage">Kia ora, Hap is where it's at!<br>
    <router-link to="/create"><button class="createEvent">Create a new event</button></router-link></div> 

    
  <div class="accordion">
  <input type="checkbox" name="collapse" id="handle1" checked="checked" hidden>
  <h2 class="handle">
    <label for="handle1">Search</label>
  </h2>
  <button class="clear">Clear</button><button class="search">Search</button>
  <input class="inline" type="text" id="keyword" name="keyword"><br><br>
  <div class="content">
    
    <label for="date">Date</label>
    <input class="inline" type="date" id="date" name="date">
    
    <label for="location">Location</label>
    <input class="inline" type="text" id="location" name="location">
    <label for="category">Category:</label>

<select name="category" id="category">
  <option value="picnic">Picnic</option>
  <option value="Dance">Dance</option>
  <option value="Tennis">Tennis</option>
  <option value="Concert">Concert</option>
</select>
  </div>
</div>


</template>

<style>

/*
 CSS for the main interaction
*/
.accordion {
  position: absolute;
  margin-top: 70%;
  margin-left: 20%;
  
}

.accordion .content {
  overflow-y: hidden;
  height: 0;
  transition: height 0.3s ease;
}

.accordion > input[type="checkbox"]:checked ~ .content {
  height: auto;
  overflow: visible;
}


.inline {
  display: inline-block;
}

.clear {
  border: 2px solid #06bdb6;
  height: 50px;
  width: 70px;
}

.search{
  background-color: #06bdb6;
  border: 2px solid black;
  height: 50px;
  width: 70px;

}

#keyword, #category, #date, #location  {
  height: 45px;
  width: 300px;
}

</style>

