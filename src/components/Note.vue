<template>
  <div>
    <div @click="deleteNote" class="sticky-note" :id="note.id">{{note.note}}</div>
  </div>
</template>

<script>
export default {
  props: {
    notes: Array,
    note: Object,
  },
  methods: {
    deleteNote(e) {
      let key = e.target.id;
      console.log("KEY",key)
      let index = this.notes.findIndex((obj) => obj.id === key);
      console.log("INDEX", index);
      this.notes.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.sticky-note {
  font-family: cursive;
  background-color: yellow;
  width: 200px;
  height: 200px;
  padding: 30px;
}
</style>