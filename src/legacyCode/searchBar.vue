<template>
<div class="accordion">
    <!--<input type="checkbox" name="collapse" id="handle1" checked="checked" hidden>-->
    <h2 class="handle">
     
      <label for="handle1">Search <img class="landingImg inline" src="../assets/icons/filter.png" id="filter" ></label>
      
      
    </h2>
    <input class="inline" type="text" id="keyword" name="keyword">
    <button class="clear">Clear</button><button class="search">Search</button>
    <br><br>
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
    </div><br><br><br><br><br>
  </div>
  </template>