// Coded by Justina Ho, tested by Keegan Dufty
// comments input bar and comments table
<template>
  <div>
    <div id="comment-form">
      <form class="commentForm" @submit.prevent="handleSubmit">
        <div class="commentField">
          <label>Name</label>
          <input
            ref="name"
            type="text"
            :class="{ 'has-error': submitting && invalidName }"
            v-model="comment.name"
            @focus="clearStatus"
            @keypress="clearStatus"
          />
        </div>
        <div class="commentField">
          <label>Comment</label>
          <input
            ref="post"
            type="text"
            :class="{ 'has-error': submitting && invalidComment }"
            v-model="comment.post"
            @focus="clearStatus"
            @keypress="clearStatus"
          />
        </div>
        <p v-if="error && submitting" class="error-message">
          ❗Please fill out all fields
        </p>
        <p v-if="success" class="success-message">
          ✅ Comment successfully added
        </p>
      </form>
      <button v-on:click="addComment(comment.id)" class="button--primary">
        Add Comment
      </button>
    </div>

    <table class="commentPosts" border="1px">
        <p v-if="comment.length < 1" >No events</p>
      <tr>
        <td>Name</td>
        <td>Comments posted</td>
        <td></td>
      </tr>
      <tr v-for="comment in comments" v-bind:key="comment.id">
        <td>{{ comment.name }}</td>
        <td>{{ comment.post }}</td>
        <td>
          <button v-on:click="deleteComment(comment.id)">
            <img
              class="crudIcon"
              src="../assets/icons/delete.png"
              alt="delete"
            />
          </button>

          <!-- Couldn't figure out how to make the edit function work -->
          <!-- <button v-on:click="editComment(comment.id)">
            <img
              class="crudIcon"
              src="../assets/icons/edit.png"
              alt="edit"
            />
          </button> -->

        </td>
      </tr>
    </table>
  </div>
  <!--Add a counter-->
    <div id="counter">
      <p class="bold">Like Hap?</p>
      <button
        id="like"
        @click="incrementValue"
        class="button-reset bg-green ba b--black ph4 pv3 mb2 white f4 dim">
          <img class="crudIcon" src="../assets/icons/like.png" alt="edit" />
        </button>
      <div class="likeCountStyling">{{ counter }}</div>
    </div>
</template>

<script>
import axios from "axios";
import CommentTable from "@/components/CommentTable.vue";

export default {
  name: "Users",
  data() {
    return {
      CommentTable,
      counter: 65789,
      comments: null,
      error: false,
      submitting: false,
      success: false,
      comment: {
        name: "",
        post: "",
      },
    };
  },
  computed: {
    invalidName() {
      return this.comment.name === "";
    },
      invalidComment() {
      return this.comment.post === "";
    },
  },
  methods: {
    handleSubmit() {
      this.clearStatus();
      this.submitting = true;

      if (this.invalidName || this.invalidComment) {
        this.error = true;
        return;
      }

      this.$emit("add:comment", this.comment);
      this.$refs.first.focus();
      this.comment = {
        name: "",
        post: "",
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
        const response = await fetch("http://localhost:3000/comments", {
          method: "POST",
          body: JSON.stringify(this.comment),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        const data = await response.json();
        this.comments = [...this.comments, data];
      } catch (error) {
        console.error(error);
      }
    },
// Couldn't figure out how to make the edit function work
    // async editComment(id, updatedComment) {
    //   try {
    //     const response = await fetch(
    //       `http://localhost:3000/comments/${id}`,
    //       {
    //         method: "PUT",
    //         body: JSON.stringify(updatedComment),
    //         headers: { "Content-type": "application/json; charset=UTF-8" }
    //       }
    //     );
    //     const data = await response.json();
    //     this.comments = this.comments.map(comment =>
    //       comment.id === id ? data : comment
    //     );
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
@import "../assets/styles/style.css";
</style>
