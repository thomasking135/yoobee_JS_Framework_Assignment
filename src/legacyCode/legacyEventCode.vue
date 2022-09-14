<!--This was the form from the CreateEvent.vue form-->
<!--It was replaced by an imported comment-->


<!--CreateEvent.vue-->
<!--<form >
        
  <div class="formBorder">
  <label  for="date">Starts on:</label><br>
  <input type="date" id="sdate" name="sdate" value="Start Date"><br>
  <label for="edate">Ends on:</label><br>
  <input type="date" id="edate" name="edate" value="End Date">
  <br>
  <label for="address">Address:</label><br>
  <input type="text" id="address" name="address" value="Address">
  <br>
  <label for="category">Category:</label><br>
  <select name="category" id="category">
  <option value="picnic">Picnic</option>
  <option value="dance">Dance</option>
  <option value="tennis">Tennis</option>
  <option value="concert">Concert</option>
</select>
  <br>
  <label for="privacy">Privacy:</label><br>
  <select name="privacy" id="privacy">
  <option value="public">Public</option>
  <option value="private">Private</option>
  
</select>
  </div>
  <br><br>
  <div class="formBuilder">
    <textarea id="description" rows="4" cols="50" placeholder="Describe your event here..."></textarea>
  
    
  
    <br><br><button class="postit">Post Event</button>
    <button class="cancelit">Cancel</button>
  </div>  
</form>--> 

<!--The Create event form-->
<!--
<h1 class="createEventHeader">Create Event</h1> 
    
      <div class="centerMessaging">
        <img class="float" src="../assets/icons/uploadImage.png" alt="upload" >
        <br><br><p class="imageUpload">Click to upload image</p>
      </div>

      <div id="employee-form">
    <form @submit.prevent="handleSubmit">
      <label>Employee name</label>
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidName }"
        v-model="employee.name"
        @focus="clearStatus"
        @keypress="clearStatus"
      >
      <label>Employee Email</label>
      <input
        type="text"
        :class="{ 'has-error': submitting && invalidEmail }"
        v-model="employee.email"
        @focus="clearStatus"
      >
      <p v-if="error && submitting" class="error-message">❗Please fill out all required fields</p>
      <p v-if="success" class="success-message">✅ Employee successfully added</p>
      <button>Add Employee</button>
    </form>
  </div>
  <event-form @add:event="addEvent"/>
  -->