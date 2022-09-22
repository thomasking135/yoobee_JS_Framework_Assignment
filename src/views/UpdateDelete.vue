<!--Thomas to update functionality-->
<template>
  <div class="create">
    <h1 class="createEventHeader">Update / Delete Event</h1>

    <div class="centerMessaging">
      <img class="float" src="../assets/icons/uploadImage.png" alt="upload" />
      <br /><br />
      <p class="imageUpload">Click to upload image</p>
    </div>

    <form>
      <div class="formBorder">
        <label for="date">Starts on:</label><br />
        <input type="date" id="sdate" name="sdate" value="Start Date" /><br />
        <label for="edate">Ends on:</label><br />
        <input type="date" id="edate" name="edate" value="End Date" />
        <br />
        <label for="address">Address:</label><br />
        <input type="text" id="address" name="address" value="Address" />
        <br />
        <label for="category">Category:</label><br />
        <select name="category" id="category">
          <option value="picnic">Picnic</option>
          <option value="dance">Dance</option>
          <option value="tennis">Tennis</option>
          <option value="concert">Concert</option>
        </select>
        <br />
        <label for="privacy">Privacy:</label><br />
        <select name="privacy" id="privacy">
          <option value="public">Public</option>
          <option value="private">Private</option>
        </select>
      </div>
      <br /><br />
      <div class="formBuilder">
        <textarea
          id="description"
          rows="4"
          cols="50"
          placeholder="Describe your event here..."
        ></textarea>

        <br /><br /><button class="delete">Delete</button>
        <button class="update">Update/Save</button>
      </div>
    </form>
  </div>
</template>

<style>
  /*All style files are entered into the 'style.scss' file and converted into css into the 'style.css' file*/
@import "../assets/styles/style.css";


</style>
