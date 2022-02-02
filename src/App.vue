<template>
  <div class="container">
    <app-progress-bar :count="count"></app-progress-bar>
    <app-note-input
      @updatedNotes="notes = $event"
      @updatedCount="count = $event"
    ></app-note-input>
    <app-note-display :notes="notes"></app-note-display>
  </div>
</template>

<script>
import ProgressBar from "./components/ProgressBar.vue";
import NoteInput from "./components/NoteInput.vue";
import NoteDisplay from "./components/NotesDisplay.vue";
export default {
  data: function () {
    return {
      notes: null,
      count: null,
    };
  },
  components: {
    appProgressBar: ProgressBar,
    appNoteInput: NoteInput,
    appNoteDisplay: NoteDisplay,
  },
  watch: {
    notes: function () {
      console.log(this.notes);
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
.container {
  height: 100vh;
  width: 100vw;
}
</style>
