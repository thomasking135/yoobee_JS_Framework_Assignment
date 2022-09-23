// Coded by Justina Ho
<template>
  <div id="comment-form">
    <form class="commentForm" @submit.prevent="handleSubmit">
      <input
        ref="first"
        type="text"
        :class="{ 'has-error': submitting && invalidName }"
        v-model="comment.name"
        @focus="clearStatus"
        @keypress="clearStatus"
      >
      <p v-if="error && submitting" class="error-message">❗Please enter a comment</p>
      <p v-if="success" class="success-message">✅ Comment successfully added</p>
      <button class="button--primary">Add Comment</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "comment-form",
  data() {
    return {
      error: false,
      submitting: false,
      success: false,
      comment: {
        name: ""
      }
    };
  },
  computed: {
    invalidName() {
      return this.comment.name === "";
    }
  },
  methods: {
    handleSubmit() {
      this.clearStatus();
      this.submitting = true;

    if (this.invalidName) {
        this.error = true;
        return;
      }

      this.$emit("add:comment", this.comment);
      this.$refs.first.focus();
      this.comment = {
        name: ""
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
form {
  margin-bottom: 2rem;
}

[class*="-message"] {
  font-weight: 500;
}

.error-message {
  color: #d33c40;
}

.success-message {
  color: #32a95d;
}
</style>
