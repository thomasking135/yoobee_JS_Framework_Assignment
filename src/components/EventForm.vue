<template>

<h1 class="createEventHeader">Create Event</h1> 
    
    <div class="centerMessaging">
      <!--<img class="float" src="../assets/icons/uploadImage.png" alt="upload" >-->
      <!--<br><br><p class="imageUpload">Click to upload image</p>-->
    </div>

    <div class="formBorder">
    <div id="event-form">
      <form @submit.prevent="handleSubmit">
        <label>Event name</label>
        <input
          ref="first"
          type="text"
          :class="{ 'has-error': submitting && invalidName }"
          v-model="event.name"
          @focus="clearStatus"
          @keypress="clearStatus"
        >
        <label>Start Date</label>
        <input
          type="datetime-local"
          :class="{ 'has-error': submitting && invalidStartDate }"
          v-model="event.StartDate"
          @focus="clearStatus"
        >

        <label>End Date</label>
        <input
          type="datetime-local"
          :class="{ 'has-error': submitting && invalidEndDate }"
          v-model="event.EndDate"
          @focus="clearStatus"
        >
        <br><br>

        <label>Location</label>
        <input
          type="text"
          :class="{ 'has-error': submitting && invalidLocation }"
          v-model="event.Location"
          @focus="clearStatus"
        >

        <label>Description</label>
        <input
          type="text"
          :class="{ 'has-error': submitting && invalidDescription }"
          v-model="event.Description"
          @focus="clearStatus"
        >
        <p v-if="error && submitting" class="error-message">😞Please enter all fields</p>
        <p v-if="success" class="success-message">👍 Event Created!</p>
        <br><br><br><button>Create Event</button>
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
          StartDate: "",
          EndDate: "",
          Location: "",
          Description: ""

        }
      };
    },
    computed: {
      invalidName() {
        return this.event.name === "";
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
      }
    },
    methods: {
      handleSubmit() {
        this.clearStatus();
        this.submitting = true;
  
        if (this.invalidName || this.invalidStartDate || this.invalidEndDate || this.invalidLocation || this.invalidDescription) {
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
          Description: ""
        };
        this.clearStatus();
        this.submitting = false;
      },
  
      clearStatus() {
        this.success = false;
        this.error = false;
      }
    }
  };
  </script>
  
  <style scoped>
  /*Style to be added here and/or linked via the style main.css stylesheet*/
  </style>
  