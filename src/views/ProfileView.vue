<template>
  <div class="profile">
    <div class="profileGrid">
      <div class="ProfileImageContainer">
        <div class="ProfileImage"></div>
        <button class="updateProfileImage">Update Image</button>
      </div>
      <div class="profileDetails">
        <input type="text" placeholder="User Name" class="profileUserName" />
        <input type="text" placeholder="Bio" class="profileBio" />
        <button type="submit" class="submitBio">Update</button>
        <button type="submit" class="LogOutBtn">Log Out</button>
      </div>
    </div>
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
      <button class="ProfileExploreButtons">Explore new events</button>
      <button class="ProfileExploreButtons">Explore upcoming events</button>
    </div>
  </div>
</template>

<style>
.profileGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10%;
  margin-bottom: 100px;
}
.ProfileImageContainer {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

.ProfileImage {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid black;
  margin-bottom: 20px;
}

.updateProfileImage {
  width: 150px;
  background-color: white;
  border: 1px solid #06beb6;
  padding: 10px;
  font-weight: 500;
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
  font-weight: 500;
  margin-bottom: 10px;
}
.LogOutBtn {
  background-color: #06beb6;
  border: 1px solid #06beb6;
  color: #303030;
  padding: 10px;
  width: 30%;
  font-weight: 500;
  margin-bottom: 10px;
}
h1 {
  text-align: center;
}
.profile {
  padding-top: 200px;
  text-align: justify;
  margin-left: 20%;
  margin-right: 20%;
}

.profileBio {
  height: 100px;
  margin-bottom: 10px;
  border: 1px solid #303030;
  padding: 10px;
}

.profileUserName {
  margin-bottom: 10px;
  border: 1px solid #303030;
  padding: 10px;
}

.ProfileTabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.ProfileTabButtons {
  background-color: white;
  border: none;
  font-size: 22pt;
  margin-bottom: 30px;
  border-bottom: 1px solid #303030;
  cursor: pointer;
}

.ProfileTabButtons:active {
  color: #06beb6;
  border-bottom: 1px solid #06beb6;
}

.ProfileNotParticipating {
  font-size: 13pt;
  text-align: center;
  font-weight: 400;
  padding-top: 20px;
  padding-bottom: 30px;
}

.ProfileExploreButtons {
  background-color: white;
  border: 1px solid #06beb6;
  padding: 10px;
  width: 80%;
  font-weight: 500;
  margin-bottom: 10px;
  align-items: center;
  margin-bottom: 20px;
}
</style>
