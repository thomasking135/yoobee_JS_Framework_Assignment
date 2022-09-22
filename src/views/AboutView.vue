<!--KEEGAN DUFTY CODE-->
<!--Functionality tested by Thomas King-->
<template>
  <div class="CoverContainer">
    <h1 class="title center">About</h1>
   <div class="overlayLandingImg">
    <img
      class="landingImg"
      src="../assets/images/AboutPage.jpg"
      alt="Landing page"
    />
  </div>
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

    <p>Hap, It’s where it’s at.</p>
  </div>
  <a>
    <router-link to="/register">
      <button class="button--primary">Join Us!</button>
    </router-link>
  </a>
  <div class="ContactUs">
    <h2 class="title--profile">Contact</h2>
    <p class="contactPara">
      For any futher information or inquires, get in-touch with our team at
      <a href="mailto:admin@hap.com">admin@hap.com</a>
    </p>
  </div>
  <div class="ContactUs">
    <h2 class="title--profile">Contact the developers</h2>
    <table class="contactTable">
      <tr>
        <th>Person</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>Justina Ho</td>
        <td>
          <a href="mailto:270191422@yoobeestudent.ac.nz"
            >270191422@yoobeestudent.ac.nz</a
          >
        </td>
      </tr>
      <tr>
        <td>Keegan Dufty</td>
        <td>
          <a href="mailto:270184437@yoobeestudent.ac.nz "
            >270184437@yoobeestudent.ac.nz</a
          >
        </td>
      </tr>
      <tr>
        <td>Thomas King</td>
        <td>
          <a href="mailto:270033944@yoobeestudent.ac.nz "
            >270033944@yoobeestudent.ac.nz
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<style>
/*All style files are entered into the 'style.scss' file and converted into css into the 'style.css' file*/
@import "../assets/styles/style.css";

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
