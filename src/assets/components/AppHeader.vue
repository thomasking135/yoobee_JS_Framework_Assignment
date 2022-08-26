<template> 
  <header> 
    <img alt="Vue logo" src="../assets/logo.png" height="50"> 
    <p>My Vue.js Application</p> 
     <nav> 
      <ul> 
        <li><router-link to="/">Home</router-link></li> 
        <li><router-link to="/about">About</router-link></li> 
      </ul> 
    </nav> 
  </header> 
</template> 


<style lang="scss"> 
 header { 
    display: flex; 
    border-bottom: 1px solid #ccc; 
    padding: .5rem 1rem; 
    background: #303030;
 
    p { 
      margin-left: 1rem; 
      color: white;
    } 
  } 
 
  nav { 
    margin-left: auto; 
 
    ul { 
      list-style: none; 
      color: white;
    } 
 
    ul li { 
      display: inline-flex; 
      margin-left: 1rem; 
      color: white;
    } 
  } 
</style> 