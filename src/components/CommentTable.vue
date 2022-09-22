<template>
  <div id="comment-table" class="comment-table">
    <p
      v-if="comments.length < 1"
      class="empty-table"
    >
      No comments
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Posted comments</th>
        </tr>
      </thead>
      <tbody>
        <tr
          :key="comment.id"
          v-for="comment in comments"
        >
          <td class="editCommentInput" v-if="editing === comment.id">
            <input
              type="text"
              v-model="comment.name"
            >
          </td>
          <td v-else>{{comment.name}}</td>
          <td v-if="editing === comment.id">
            <input
              type="text"
              v-model="comment.post"
            >
          </td>
          <td v-else>{{comment.post}}</td>
          <td v-if="editing === comment.id">
            <button @click="editcomment(comment)">Save</button>
            <button
              class="muted-button"
              @click="editing = null"
            >Cancel</button>
          </td>
          <td v-else>
            <button @click="editMode(comment.id)"><img class="crudIcon" src="../assets/icons/edit.png"></button>
            <button @click="$emit('delete:comment', comment.id)"><img class="crudIcon" src="../assets/icons/delete.png"></button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  
</template>

<script>
export default {
  name: 'comment-table',
  props: {
    comments: Array,
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
    

    editcomment(comment) {
      if (comment.name === '') return
      this.$emit('edit:comment', comment.id, comment)
      this.editing = null
    },

    incrementValue() {
      this.counter++;
    },
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

.comment-table table{
    margin-bottom: 50px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border-spacing: 0; 
    border-collapse: separate;
}

.empty-table {
  text-align: center;
}

tr {
  border-spacing: 0;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  
}

tbody{
  border-collapse: separate;
   border-spacing: 0; 
   border: px solid var(--green);
}

td {
  text-align: left;
  border: 1px solid var(--green);
}

#counter {
    margin-bottom: 70px;
}
</style>
