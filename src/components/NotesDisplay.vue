<template>
  <div class="notes-display-container">
    <div v-for="note in notes" :key="note.id" class="sticky-note">{{ note.note }}</div>
  </div>
</template>

<script>
export default {
  props: {
    notes: Array,
  },
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
}

.sticky-note {
    background-color: yellow;
    width: 200px;
    height: 200px;
    padding: 30px;
}
</style>