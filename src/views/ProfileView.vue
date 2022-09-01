<template>
  <div class="profile">
    <div class="profileGrid">
      <div class="ProfileImageContainer">
        <div class="ProfileImage"></div>
        <button class="updateProfileImage">Update Image</button>
      </div>
      <div class="profileDetails">
        <input type="text" placeholder="User Name" />
        <input type="text" placeholder="Bio" />
        <button type="submit" class="submitBio">Update</button>
        <button type="submit" class="LogOutBtn">Log Out</button>
      </div>
    </div>
  </div>
</template>

<style>
.ProfileImageContainer {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

.ProfileImage {
  width: 100px;
  height: 100px;
  border-radius: 50px;
  border: 1px solid black;
  margin-bottom: 20px;
}

.updateProfileImage {
  width: 100px;
  background-color: white;
  border: 1px solid #06beb6;
  padding: 10px;
}

.profileDetails {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

.submitBio {
  background-color: white;
  border: 1px solid #06beb6;
  padding: 10px;
  width: 30%;
}
.LogOutBtn {
  background-color: #06beb6;
  border: 1px solid #06beb6;
  color: #303030;
  padding: 10px;
  width: 30%;
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
