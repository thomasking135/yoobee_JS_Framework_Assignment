<!--Thomas Code-->
<!--Template-->
<template>

  <img class="landingImg" src="../assets/images/LandingPage.jpg" alt="Landing page" style="width:100%;">
  <div class="centerMessage">Kia ora, Hap is where it's at!<br>
    <router-link to="/create"><button class="createEvent">Create a new event</button></router-link></div> 

    
  <div class="accordion">
  
    <form action="/create">
  <h2 class="handle">
   
    <label for="handle1">Search</label>
    
    
  </h2>
  <input class="inline" type="text" v-model="input" placeholder="Search events..." id="keyword" name="keyword">
  
  <button class="search">Search</button>
  <br>
  </form>
  <br>
  </div>



</template>
<!--End of template-->



<!--Style section-->
<style>

/*
 CSS for the main interaction
*/
.accordion {
  position: absolute;
  margin-top: 70%;
  margin-left: 40%;
  margin-right: 37%;
  
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

#filter {
  position: absolute;
  margin-left: 20px;
}

</style>
<!--End of style section-->
