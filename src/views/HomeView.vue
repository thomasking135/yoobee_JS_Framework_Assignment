<!--THOMAS KING Code-->
<!--Functionality tested by Justina Ho-->
<!--Template-->
<template>
  <div class="centerMessage">
    <h2>Kia ora, Hap is where it's at!</h2>
    <router-link to="/create"
      ><button class="button--landing">Create a new event</button></router-link
    >
  </div>
<!--Image overlay-->
  <div class="overlayLandingImg">
    <img
      class="landingImg"
      src="../assets/images/LandingPage.jpg"
      alt="Landing page"
    />
  </div>

  <!--Events table-->
  <event-table
    class="displayCenter"
    :events="events"
    @delete:event="deleteEvent"
    @edit:event="editEvent"
  />
  <FooterSection />

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
<script>
// eslint-disable-next-line no-unused-vars
import Axios from "axios";
import FooterSection from "@/components/FooterSection.vue";
import EventTable from "@/components/EventTable.vue";
const baseURLEvents = "http://localhost:3000/events";

export default {
  name: "App",
  components: {
    FooterSection,
    EventTable,
    // eslint-disable-next-line vue/no-unused-components
  },
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    this.getEvents();
  },
  methods: {
    async getEvents() {
      try {
        const response = await fetch(
          baseURLEvents
          /*Use of the JSON https API created by Justina*/
        );
        const data = await response.json();
        this.events = data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
<!--Style section-->
<style>
/*All style files are entered into the 'style.scss' file and converted into css into the 'style.css' file*/
@import "../assets/styles/style.css";

</style>
<!--End of style section-->
