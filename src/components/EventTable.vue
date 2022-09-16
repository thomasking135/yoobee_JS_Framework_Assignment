<template>
    <div id="event-table">
      <p
        v-if="events.length < 1"
        class="event-table"
      >
        No events
      </p>
      <table v-else>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Location</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr
            :key="event.id"
            v-for="event in events"
          >
          <!--Edit Event name-->
            <td v-if="editing === event.id">
              <input
                type="text"
                v-model="event.name"
              >
            </td>
            <td v-else>{{event.name}}</td>

            <!--Edit Event StartDate-->
            <td v-if="editing === event.id">
              <input
                type="datetime-local"
                v-model="event.StartDate"
              >
            </td>
            <td v-else>{{event.StartDate}}</td>

            <!--Edit Event EndDate-->
            <td v-if="editing === event.id">
              <input
                type="datetime-local"
                v-model="event.EndDate"
              >
            </td>
            <td v-else>{{event.EndDate}}</td>

            <!--Edit Event Location-->
            <td v-if="editing === event.id">
              <input
                type="text"
                v-model="event.Location"
              >
            </td>
            <td v-else>{{event.Location}}</td>

            <!--Edit Event Description-->
            <td v-if="editing === event.id">
              <input
                type="text"
                v-model="event.Description"
              >
            </td>
            <td v-else>{{event.Description}}</td>


            <!--Further Processing Functions-->
            <td v-if="editing === event.id">
              <button @click="editEvent(event)">Save</button>
              <button
                class="muted-button"
                @click="editing = null"
              >Cancel</button>
            </td>
            <td v-else>
              <button @click="editMode(event.id)">Edit</button>
              <button @click="$emit('delete:event', event.id)">Delete</button>
            </td>
  
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'event-table',
    props: {
      events: Array,
    },
    data() {
      return {
        editing: null,
      }
    },
    methods: {
      editMode(id) {
        this.editing = id
      },
  
      editEvent(event) {
        if (event.name === '' || event.StartDate === ''  || event.EndDate === ''
        || event.Location === ''  ||  event.Description === '') return
        this.$emit('edit:event', event.id, event)
        this.editing = null
      }
    }
  }
  </script>
  
  <style scoped>
  button {
    margin: 0 0.5rem 0 0;
  }
  
  input {
    margin: 0;
  }
  
  .empty-table {
    text-align: center;
  }
  </style>
  