<template>
    <div id="event-table">
      <p
        v-if="events.length < 1"
        class="event-table"
      >
        No events
      </p>
      <table class="event-table" v-else>
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
      <br><br>
      <!--Add a counter-->
      <div id="counter">
        
      <p class="bold">Like Hap?</p>
      <button id="like" @click="incrementValue" class="button-reset bg-green ba b--black ph4 pv3 mb2 white f4 dim"></button>
      <div class="likeCountStyling">{{counter}}</div>
      </div>

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
        counter: 0,
      }
    },
    methods: {
      editMode(id) {
        this.editing = id
      },
      incrementValue() {
      this.counter++;
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
  #like {
    margin: 0 0.5rem 0 0;
    background-image: url("@/assets/icons/thumb.png");
    background-repeat: no-repeat;
    background-position: 50% 50%;
  /* put the height and width of your image here */
    height: 90px;
    width: 90px;
    border: none;
  }

  #like:hover {
    opacity: 90%;
  }

  input {
    margin: 0;
  }
  
  .empty-table {
    text-align: center;
  }

  td{
    text-align: justify;
  }

  .bold{
    font-weight: bold;
  }

  .event-table{
    width: 100%;
    margin-left: auto;
    margin-right: auto;
  }
  </style>
  