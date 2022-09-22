<template>
  <div id="event-table">
    <h2 class="title--secondary">Current Events</h2>
    <br /><br />
    <p>Click on the events to express interest or to find an event contact.</p>
    <p v-if="events.length < 1" class="event-table">No events</p>

    <table class="event-table" v-else>
      <thead>
        <tr>
          <th>Event name</th>
          <th>Description</th>
          <th>Email</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Location</th>
          <th>Participate</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="event.id" v-for="event in events">
          <!--Edit Event name-->
          <td v-if="editing === event.id">
            <input type="text" v-model="event.name" />
          </td>
          <td v-else>{{ event.name }}</td>

          <!--Edit Event Description-->
          <td v-if="editing === event.id">
            <input type="text" v-model="event.Description" />
          </td>
          <td v-else>{{ event.Description }}</td>

          <!--Edit Event email-->
          <td v-if="editing === event.id">
            <input type="email" v-model="event.email" />
            <a v-bind:href="'mailto:' + event.email">{{ event.email }}</a>
          </td>
          <td v-else>{{ event.email }}</td>

          <!--Edit Event StartDate-->
          <td v-if="editing === event.id">
            <input type="datetime-local" v-model="event.StartDate" />
          </td>
          <td v-else>{{ event.StartDate }}</td>

          <!--Edit Event EndDate-->
          <td v-if="editing === event.id">
            <input type="datetime-local" v-model="event.EndDate" />
          </td>
          <td v-else>{{ event.EndDate }}</td>

          <!--Edit Event Location-->
          <td v-if="editing === event.id">
            <input type="text" v-model="event.Location" />
          </td>
          <td v-else>{{ event.Location }}</td>

          <td>
            <!-- Rounded switch -->
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </td>

          <!--Further Processing Functions-->
          <td v-if="editing === event.id">
            <button @click="editEvent(event)">Save</button>
            <button class="muted-button" @click="editing = null">Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(event.id)">
              <img class="crudIcon" src="../assets/icons/edit.png" alt="edit" />
            </button>
            <button @click="$emit('delete:event', event.id)">
              <img
                class="crudIcon"
                src="../assets/icons/delete.png"
                alt="delete"
              />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "event-table",
  props: {
    events: Array,
  },
  data() {
    return {
      editing: null,
    };
  },
  methods: {
    editMode(id) {
      this.editing = id;
    },
    editEvent(event) {
      if (
        event.name === "" ||
        event.StartDate === "" ||
        event.EndDate === "" ||
        event.Location === "" ||
        event.Description === "" ||
        event.email === ""
      )
        return;
      this.$emit("edit:event", event.id, event);
      this.editing = null;
    },
  },
};
</script>

<style scoped>
input {
  margin: 0;
}

.empty-table {
  text-align: center;
}

td {
  text-align: left;
  border: 1px solid var(--green);
}

.bold {
  font-weight: bold;
}

.event-table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  border-collapse: separate;
}
</style>
