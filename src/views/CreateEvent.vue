<!--Thomas to update functionality-->
<!--Functionality to be tested by Justina Ho-->
<template>
  <h1 class="title center">Create Event</h1>
   <div class="overlayLandingImg">
    <img
      class="landingImg"
      src="../assets/images/createEvent.jpg"
      alt="Landing page"
    />
  </div>

  <!--Event form and table display-->
  <div class="create">
    <event-form @add:event="addEvent"/>
    <event-table
      class="displayCenter"
      :events="events"
      @delete:event="deleteEvent"
      @edit:event="editEvent"
      @comment:event="commentEvent"
    />
  </div>

  <!--Comments section-->
    <div id="app" class="small-container">
    <h2 class="title--secondary">Comments</h2>
    <comment-form @add:comment="addComment"/>
            <Users/>
    <comment-table
      :comments="comments"
      @delete:comment="deleteComment"
      @edit:comment="editComment"
    />
  </div>

</template>

<style>
/*All style files are entered into the 'style.scss' file and converted into css into the 'style.css' file*/
@import "../assets/styles/style.css";
</style>

<script>
import EventForm from "@/components/EventForm.vue";
import EventTable from "@/components/EventTable.vue";
// import CommentTable from "@/components/CommentTable.vue";
// import CommentForm from "@/components/CommentForm.vue";
import Users from "@/components/Users.vue";
// const baseURL = "http://localhost:3000/events";
// const commentURL = "http://localhost:3000/comments";

export default {
  name: "app",
  components: {
    EventForm,
    EventTable,
    // CommentForm,
    // CommentTable,
    Users
  },
  data() {
    return {
      events: [],
      comments: []
    };
  },

  mounted() {
    this.getEvents();
    this.getComments();
  },

 methods: {

    async getEvents() {
      try {
        const response = await fetch(
         "http://localhost:3000/events"
          /*This is where our own API data will go*/
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
         'http://localhost:3000/events',
          /*This is where our own API data will go*/
          /*Use of the JSON https API created by Justina*/
          {
            method: "POST",
            body: JSON.stringify(event),
            headers: { "Content-type": "application/json; charset=UTF-8" }
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
          `http://localhost:3000/events/${id}`,
          /*This is where our own API data will go*/
          /*Use of the JSON https API created by Justina*/
          {
            method: "PUT",
            body: JSON.stringify(updatedEvent),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          }
        );
        const data = await response.json();
        this.events = this.events.map(event =>
          event.id === id ? data : event
        );
      } catch (error) {
        console.error(error);
      }
    },

    async deleteEvent(id) {
      try {
        await fetch(`http://localhost:3000/events/${id}`, {
          /*This is where our own API data will go*/
          /*Use of the JSON https API created by Justina*/
          method: "DELETE"
        });
        this.events = this.events.filter(event => event.id !== id);
      } catch (error) {
        console.error(error);
      }
    },
    
//  Comment form
     async getComments() {
      try {
        const response = await fetch(
          'http://localhost:3000/comments',
        );
        const data = await response.json();
        this.comments = data;
      } catch (error) {
        console.error(error);
      }
    },

    async addComment(comment) {
      try {
        const response = await fetch(
          'http://localhost:3000/comments',
          {
            method: "POST",
            body: JSON.stringify(comment),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          }
        );
        const data = await response.json();
        this.comments = [...this.comments, data];
      } catch (error) {
        console.error(error);
      }
    },

    async editComment(id, updatedComment) {
      try {
        const response = await fetch(
          `http://localhost:3000/comments/${id}`,
          {
            method: "PUT",
            body: JSON.stringify(updatedComment),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          }
        );
        const data = await response.json();
        this.comments = this.comments.map(comment =>
          comment.id === id ? data : comment
        );
      } catch (error) {
        console.error(error);
      }
    },

    async deleteComment(id) {
      try {
        await fetch(`http://localhost:3000/comments/${id}`, {
          method: "DELETE"
        });
        this.comments = this.comments.filter(comment => comment.id !== id);
      } catch (error) {
        console.error(error);
      }
    }

  }
}; 
</script>