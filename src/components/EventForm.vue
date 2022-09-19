<template>
  <h1 class="createEventHeader">Create Event</h1>

  <div class="centerMessaging">
    <!--<img class="float" src="../assets/icons/uploadImage.png" alt="upload" >-->
    <!--<br><br><p class="imageUpload">Click to upload image</p>-->
  </div>

  <div class="formBorder">
    <div id="event-form">
      <form @submit.prevent="handleSubmit">
        <div class="tableField">
          <label>Event name</label>
          <input
            ref="first"
            type="text"
            :class="{ 'has-error': submitting && invalidName }"
            v-model="event.name"
            @focus="clearStatus"
            @keypress="clearStatus"
          />
        </div>

        <div class="tableField">
          <label>Event email</label>
          <input
            ref="first"
            type="email"
            :class="{ 'has-error': submitting && invalidEmail }"
            v-model="event.Email"
            @focus="clearStatus"
            @keypress="clearStatus"
          />
        </div>

        <div class="tableField">
          <label>Start Date</label>
          <input
            type="datetime-local"
            :class="{ 'has-error': submitting && invalidStartDate }"
            v-model="event.StartDate"
            @focus="clearStatus"
          />
        </div>

        <div class="tableField">
          <label>End Date</label>
          <input
            type="datetime-local"
            :class="{ 'has-error': submitting && invalidEndDate }"
            v-model="event.EndDate"
            @focus="clearStatus"
          />
        </div>

        <div class="tableField">
          <label>Location</label>
          <input
            type="text"
            :class="{ 'has-error': submitting && invalidLocation }"
            v-model="event.Location"
            @focus="clearStatus"
          />
        </div>

        <div class="tableField">
          <label>Description</label>
          <input
            type="text"
            :class="{ 'has-error': submitting && invalidDescription }"
            v-model="event.Description"
            @focus="clearStatus"
          />
        </div>

        <p v-if="success" class="success-message">👍 Event Created!</p>
        <p v-if="error && submitting" class="error-message">
          😞Please enter all fields
        </p>

        <button class="button--primary">Create Event</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "event-form",
  data() {
    return {
      error: false,
      submitting: false,
      success: false,
      event: {
        name: "",
        Email: "",
        StartDate: "",
        EndDate: "",
        Location: "",
        Description: "",
      },
    };
  },
  computed: {
    invalidName() {
      return this.event.name === "";
    },

    invalidEmail() {
      return this.event.Email === "";
    },

    invalidStartDate() {
      return this.event.StartDate === "";
    },

    invalidEndDate() {
      return this.event.EndDate === "";
    },

    invalidLocation() {
      return this.event.Location === "";
    },

    invalidDescription() {
      return this.event.Description === "";
    },
  },
  methods: {
    handleSubmit() {
      this.clearStatus();
      this.submitting = true;

      if (
        this.invalidName ||
        this.invalidEmail ||
        this.invalidStartDate ||
        this.invalidEndDate ||
        this.invalidLocation ||
        this.invalidDescription
      ) {
        this.error = true;
        return;
      }

      this.$emit("add:event", this.event);
      this.$refs.first.focus();
      this.event = {
        name: "",
        StartDate: "",
        EndDate: "",
        Location: "",
        Description: "",
      };
      this.clearStatus();
      this.submitting = false;
    },

    clearStatus() {
      this.success = false;
      this.error = false;
    },
  },
};
</script>

<style scoped>
/*Style to be added here and/or linked via the style main.css stylesheet*/
</style>
