<template>
  <div class="CoverContainer">
    <img
      class="cover-image"
      :src="aboutCoverImage"
      alt="people standing around a fire on the beach"
    />
    <h1 class="CoverHeader">About</h1>
  </div>
  <div class="about">
    <p>
      Hap was created in 2022 by an event management company to allow event
      attendees and event hosts to have a better experience. We saw a gap in the
      market and jumped at the opportunity. After researching what was needed,
      we have proudly created ‘Hap’, an app that will hopefully make your event
      experience more enjoyable.
    </p>
    <br />
    <br />

    <p>
      Hap allows the attendees of events to communicate with speakers and hosts
      of the event. Giving the opportunity for hosts to clear up any queries
      that attendees may have going into an event, after an event, or even
      during the event.
    </p>

    <br />
    <br />

    <p>
      We have given the attendees all the information they need in one place!
      The event page is a one stop shop, with all the information that is needed
      including dates, locations, and event descriptions. We have broken this
      down into a simple and intuitive app that works carefree. Anyone is able
      to enjoy Hap.
    </p>

    <br />
    <br />

    <p>
      Whether you are looking to go to an event and find your crowd, or create
      an event of your own, we have made the app for you!
    </p>
    <br />

    <p>Hap, It’s where it’s at.</p>
  </div>
  <button class="JoinUsButton">Join Us!</button>
  <div class="ContactUs">
    <h2 class="ContactHeader">Contact</h2>
    <p class="contactPara">
      For any futher information or inquires, get in-touch with our team at
      admin@hap.com
    </p>
  </div>
</template>

<style>
.CoverHeader {
  position: absolute;
  text-align: left;
  bottom: 8%;
  left: 20%;
  font-size: 40pt;
  transform: translate(-50%, -50%);
  color: white;
}

#contactHead {
  padding-top: 60px;
  color: black;
}

.container {
  padding-top: 100px;
  position: absolute;
  text-align: center;
  color: white;
}

.centerAboutMessage {
  position: absolute;
  top: 15%;
  left: 10%;
  color: palegoldenrod;
  font-size: 300%;
  font-weight: bold;
}

.createEvent {
  background-color: #08bdb6;
  text-align: center;
  font-size: 14px;
  font-family: lato, sans-serif;
  font-weight: 500;
  font-style: normal;
  color: #303030;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 50px;
  padding-right: 50px;
}

.createEvent:hover {
  background-color: #48b1bf;
}

.about {
  padding-top: 100px;
  padding-bottom: 100px;
  text-align: justify;

  margin-left: 10%;
  margin-right: 10%;
}
.CoverContainer {
  position: relative;
  display: inline-block;
}
.cover-image {
  width: 100vw;
  margin-top: 0;
  border-top: 1px solid #06beb6;
}
.ContactUs {
  padding-top: 50px;
  text-align: justify;
  margin-bottom: 50px;
  margin-left: 10%;
  margin-right: 10%;
}
.ContactHeader {
  text-align: left;
  font-size: 40pt;
}

.JoinUsButton {
  background-color: #06beb6;
  color: #303030;
  padding: 10px;
  font-weight: 700;
  border: 1px solid #06beb6;
  margin-top: 30px;
  align-items: left;
  margin-left: 10%;
  margin-right: 10%;
}
.JoinUsButton:hover {
  background-color: #48b1bf;
  border: 1px solid #48b1bf;
  padding: 10px;
  color: #303030;
}

#aboutImage {
  padding-bottom: 50px;
}
</style>

<script>
import aboutCoverImage from "../assets/images/AboutPage.jpg";

export default {
  data() {
    return {
      aboutCoverImage,
    };
  },
};
</script>
