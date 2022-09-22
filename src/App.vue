<template>
  <!--Nav router links-->
  <link rel="stylesheet" href="https://use.typekit.net/hic2dec.css" />

  <nav class="icon-nav">
    <li>
      <router-link to="/"
        ><img id="logo" class="desktopLogo" alt="logo" src="./assets/logo/logo-full.png"
      /></router-link>

      <router-link to="/"
        ><img id="logo" class="mobileLogo" alt="logo" src="./assets/logo/icon.png"
      /></router-link>
    </li>
    <li>
      <router-link to="/">
        <div class="home-icon" id="homes" alt="Home">
          <img
            src="./assets/icons/home.png"
            alt="home hover"
            style="width: 45px"
          />
          <img
            src="./assets/icons/homeHover.png"
            class="img-top"
            alt="home"
            style="width: 45px"
          />
        </div>
      </router-link>
    </li>
    <li>
      <router-link to="/about">
        <div class="info-icon" id="info" alt="About">
          <img
            src="./assets/icons/info.png"
            alt="home hover"
            style="width: 45px"
          />
          <img
            src="./assets/icons/infoHover.png"
            class="img-top"
            alt="home"
            style="width: 45px"
          />
        </div>
      </router-link>
    </li>
    <li>
      <router-link to="/create">
        <div class="add-icon" id="plus" alt="Create Event">
          <img
            src="./assets/icons/add.png"
            alt="create hover"
            style="width: 45px"
          />
          <img
            src="./assets/icons/addHover.png"
            class="img-top"
            alt="create"
            style="width: 45px"
          />
        </div>
      </router-link>
    </li>

    <li>
      <div class="dropdown">
        <router-link to="/profile">
          <div class="user-icon" id="plus" alt="Create Event">
            <img
              src="./assets/icons/user.png"
              alt="create hover"
              style="width: 45px"
            />
            <img
              src="./assets/icons/userHover.png"
              class="img-top"
              alt="create"
              style="width: 45px"
            />
          </div>
          <div class="dropdown-content">
            <a><router-link to="/register">Sign Up</router-link></a>
            <a><router-link to="/login">Log In</router-link></a>
          </div>
        </router-link>
      </div>
    </li>
  </nav>


  <router-view />
</template>

<!--Style guide-->
<style>
@import "./assets/styles/style.css";
</style>
