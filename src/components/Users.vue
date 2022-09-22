<template>
  <div>
    <div id="comment-form">
      <form class="commentForm" @submit.prevent="handleSubmit">
        <input
          ref="name"
          type="text"
          :class="{ 'has-error': submitting && invalidName }"
          v-model="comment.name"
          @focus="clearStatus"
          @keypress="clearStatus"
        />
         <input
          ref="post"
          type="text"
          :class="{ 'has-error': submitting && invalidName }"
          v-model="comment.post"
          @focus="clearStatus"
          @keypress="clearStatus"
        />
        <p v-if="error && submitting" class="error-message">
          ❗Please enter a comment
        </p>
        <p v-if="success" class="success-message">
          ✅ Comment successfully added
        </p>
        <button v-on:click="addComment(comment.id)" class="button--primary">Add Comment</button>
      </form>
    </div>

    <table class="commentPosts" border="1px">
      <tr>
        <td>name</td>
        <td>post</td>
        <td>action</td>
      </tr>
      <tr v-for="comment in comments" v-bind:key="comment.id">
        <td>{{ comment.name }}</td>
        <td>{{ comment.post }}</td>
        <td><button v-on:click="deleteComment(comment.id)">Delete</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Users",
  data() {
    return {
      comments: null,
      error: false,
      submitting: false,
      success: false,
      comment: {
        name: "",
        post: ""
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
    },
    getData() {
      axios.get("http://localhost:3000/comments").then((response) => {
        this.users = response.data;
        console.log(response);
        this.comments = response.data;
      });
    },
    async deleteComment(id) {
      try {
        await fetch(`http://localhost:3000/comments/${id}`, {
          method: "DELETE",
        });
        this.comments = this.comments.filter((comment) => comment.id !== id);
        console.log(this.comment.id);
      } catch (error) {
        console.error(error);
      }
    },

    async addComment() {
      try {
        const response = await fetch(
          'http://localhost:3000/comments',
          {
            method: "POST",
            body: JSON.stringify(this.comment),
            headers: { "Content-type": "application/json; charset=UTF-8" }
          }
        );
        const data = await response.json();
        this.comments = [...this.comments, data];
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.commentPosts {
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 100px;
}
</style>
