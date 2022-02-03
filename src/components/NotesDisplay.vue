<template>
  <div class="notes-display-container">
    <div @click="deleteNote" v-for="note in notes" :key="note.id" :id="note.id" class="sticky-note">{{ note.note }}</div>
  </div>
</template>

<script>
export default {
  props: {
    notes: Array,
  },
  methods: {
      deleteNote(e) {
          let key = e.target.id;
          let index = this.notes.findIndex((obj) => obj.id === key);
          this.notes.splice(index, 1);
          this.$emit("changedCount", this.count);
      },
  },
  computed: {
      count: function() {
          return this.notes.length;
      }
  }
};
</script>

<style scoped>
.notes-display-container {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr));
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  margin: 3rem auto;
  padding: 0 100px;
}

.sticky-note {
    font-family: cursive;
    background-color: yellow;
    width: 200px;
    height: 200px;
    padding: 30px;
}
</style>