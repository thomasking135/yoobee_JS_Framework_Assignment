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
          <textarea id="userBio" name="userBio" rows="5" cols="33"/><br><br>
          <button type="submit" id="updateProfile" class="submitBio" onclick="change()">Update</button><br><br>
          <router-link to="/login"><button id="logoutProfile" type="submit" class="LogOutBtn">Log Out</button></router-link><br>
        </div>
      </div>

      <!--
      <div class="ProfileEvents">
        <div class="ProfileTabs">
          <button class="ProfileMyEvents ProfileTabButtons">My Events</button>
          <button class="ProfileParticipating ProfileTabButtons">
            Participating
          </button>
        </div>
        <p class="ProfileNotParticipating">
          You are currently not participating in any events.
        </p>
        <a><router-link to="/"><button class="ProfileExploreButtons">Explore new events</button></router-link></a>
        <a><router-link to="/"><button class="ProfileExploreButtons">Explore upcoming events</button></router-link></a>
      </div>-->
    </div>

    <hr class="profileHR">

  </template>

  <style>
  @import '../assets/styles/main.css';
  </style>

  <script></script>

  //import { change } from "../assets/JS/views.js";
