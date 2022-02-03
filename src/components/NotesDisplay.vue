<template>
  <div class="notes-display-container">
    <app-note
      :notes="notes"
      v-for="note in notes"
      :note="note"
      :key="note.id"
      :id="note.id"
      ></app-note
    >
  </div>
</template>

<script>
import Note from "./Note.vue";

export default {
  props: {
    notes: Array,
  },
  components: {
    appNote: Note,
  },
  methods: {

  },
  computed: {
    count: function () {
      this.$emit("changedCount", this.count);
      return this.notes.length;
    },
  },
};
</script>

<style scoped>
.notes-display-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  margin: 3rem auto;
  padding: 0 100px;
}


</style>