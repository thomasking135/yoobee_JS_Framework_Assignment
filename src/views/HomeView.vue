<!--Thomas Code-->
<!--Template-->
<template>
 <div class="centerMessage">
    <h2>  Kia ora, Hap is where it's at! </h2>
      <router-link to="/create"
        ><button class="button--landing">
          Create a new event
        </button></router-link
      >
  </div>
  <div class="overlayLandingImg">
    <img
      class="landingImg"
      src="../assets/images/LandingPage.jpg"
      alt="Landing page"
    />
  </div>

  <!-- <div class="accordion">
    <form action="/create">
      <h2 class="handle">
        <label for="handle1">Search</label>
      </h2>
      <input
        class="inline"
        type="text"
        v-model="input"
        placeholder="Search events..."
        id="keyword"
        name="keyword"
      />

      <button class="search button--secondary">Search</button>
      <br /> -->
    <!-- </form> -->
  <!-- </div> -->
</template>
<!--End of template-->

<!--Style section-->
<style>
/*
 CSS for the main interaction
*/
.accordion {
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  margin-top: 100px;
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

.search {
  height: 50px;
  width: 70px;
  margin-left: 10px;
}

#keyword,
#category,
#date,
#location {
  height: 45px;
  width: 300px;
}

#filter {
  position: absolute;
  margin-left: 20px;
}
</style>
<!--End of style section-->
