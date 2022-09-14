<!--Thomas to update functionality-->
<template>

    <div class="create">
      
    <event-form @add:event="addEvent"/>

    </div>

   
  
  </template>
  
  <script>
  import EventForm from "@/components/EventForm.vue";

export default {
  name: "app",
  components: {
    EventForm
  },
  data() {
    return {
      events: []
    };
  },

  mounted() {
    this.getEvents();
  },

  methods: {
    async getEvents() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
          /*This is where our own API data will go*/
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
          "https://jsonplaceholder.typicode.com/users",
          /*This is where our own API data will go*/
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
          `https://jsonplaceholder.typicode.com/users/${id}`,
          /*This is where our own API data will go*/
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
        await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
          /*This is where our own API data will go*/
          method: "DELETE"
        });
        this.employees = this.employees.filter(employee => employee.id !== id);
      } catch (error) {
        console.error(error);
      }
    }
  }
}; 
  </script>
  
  <style>
  @import '../assets/styles/main.css';
  .formBorder{
  border: 2px solid blue; 
  margin-top: 10%;
  display: inline-block;
  padding-left: 15%;
  padding-right: 15%;
  padding-top: 1%;
  padding-bottom: 1%; 
}



#address{
  width: 353px;
}

#category, #privacy {
  width: 360px;
}

#description{
  border: 2px solid blue; 
  display: inline-block;
  padding-left: 14%;
  padding-right: 14.6%;
  padding-top: 1%;
  padding-bottom: 1%; 
}

.postit {
  width: 100px;
  height: 30px;
  float: right;
  margin-left: 10px;
}

.postit:hover {
  transform: scale(1.1);
  background-color: #06bdb6;
}

.cancelit {
  width: 100px;
  height: 30px;
  float: right;
  color: red;
  border: 2px solid red;
}

.cancelit:hover {
  transform: scale(1.1);
  background-color: red;
  color: white
}
  </style>