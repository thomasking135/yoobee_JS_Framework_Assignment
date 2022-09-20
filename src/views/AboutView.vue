<template>
  <div class="CoverContainer">
    <img
      class="cover-image"
      :src="aboutCoverImage"
      alt="people standing around a fire on the beach"
    />
    <h1 class="title">About</h1>
  </div>
  <div class="about">
    <p>
      Hap was created in 2022 by an event management company to allow event
      attendees and event hosts to have a better experience. We saw a gap in the
      market and jumped at the opportunity. After researching what was needed,
      we have proudly created ‘Hap’, an app that will hopefully make your event
      experience more enjoyable.
    </p>

    <p>
      Hap allows the attendees of events to communicate with speakers and hosts
      of the event. Giving the opportunity for hosts to clear up any queries
      that attendees may have going into an event, after an event, or even
      during the event.
    </p>

    <p>
      We have given the attendees all the information they need in one place!
      The event page is a one stop shop, with all the information that is needed
      including dates, locations, and event descriptions. We have broken this
      down into a simple and intuitive app that works carefree. Anyone is able
      to enjoy Hap.
    </p>

    <p>
      Whether you are looking to go to an event and find your crowd, or create
      an event of your own, we have made the app for you!
    </p>
    <br />

    <p>Hap, It’s where it’s at.</p>
  </div>
  <a
    ><router-link to="/register"
      ><button class="JoinUsButton">Join Us!</button></router-link
    ></a
  >
  <div class="ContactUs">
    <h2 class="title center">Contact</h2>
    <p class="contactPara">
      For any futher information or inquires, get in-touch with our team at
      <a href="mailto:admin@hap.com">admin@hap.com</a>
    </p>
  </div>
</template>

<style>
@import "../assets/styles/main.css";
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
