<!--Thomas to update functionality-->
<!--Functionality to be tested by Justina Ho-->
<template>
  <div class="create">
    <event-form @add:event="addEvent" />
    <event-table
      class="displayCenter"
      :events="events"
      @delete:event="deleteEvent"
      @edit:event="editEvent"
      @comment:event="commentEvent"
    />
  </div>

</template>

<style>
@import "../assets/styles/main.css";
</style>

<script>
import EventForm from "@/components/EventForm.vue";
import EventTable from "@/components/EventTable.vue";
const baseURL = "http://localhost:3000/events";

export default {
  name: "app",
  components: {
    EventForm,
    EventTable,
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
          baseURL
          /*Use of the JSON https API created by Justina*/
        );
        const data = await response.json();
        this.events = data;
      } catch (error) {
        console.error(error);
      }
    },

    async addEvent(event) {
      try {
        const response = await fetch(
          baseURL,
          /*Use of the JSON https API created by Justina*/
          {
            method: "POST",
            body: JSON.stringify(event),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );
        const data = await response.json();
        this.events = [...this.events, data];
      } catch (error) {
        console.error(error);
      }
    },

    async editEvent(id, updatedEvent) {
      try {
        const response = await fetch(
           'baseURL/${id}',
          // `https://jsonplaceholder.typicode.com/users/${id}`,
          /*Use of the JSON https API created by Justina*/
          {
            method: "PUT",
            body: JSON.stringify(updatedEvent),
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }
        );
        const data = await response.json();
        this.events = this.events.map((event) =>
          event.id === id ? data : event
        );
      } catch (error) {
        console.error(error);
      }
    },

    async deleteEvent(id) {
      try {
        await fetch(`baseURL/${id}`, {
          /*Use of the JSON https API created by Justina*/
          method: "DELETE",
        });
        this.events = this.events.filter((event) => event.id !== id);
      } catch (error) {
        console.error(error);
      }
    },

    async commentEvent() {
      try {
        await fetch(baseURL, {
          /*Use of the JSON https API created by Justina*/
          // method: "POST",
          method: "POST",
            body: JSON.stringify(event),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        });

        
        // this.events = this.events.filter((event) => event.id !== id);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
