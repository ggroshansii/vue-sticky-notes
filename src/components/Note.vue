<template>
  <div>
    <div @click="deleteNote" class="sticky-note" :id="note.id">
      {{ note.note }}
    </div>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data: function () {
    return {
      count: null,
    };
  },
  props: {
    notes: Array,
    note: Object,
  },
  methods: {
    keepCount() {
      console.log("fired");
      this.count = this.notes.length;
      eventBus.$emit("decreaseCount", this.count);
    },
    deleteNote(e) {
      let key = e.target.id;
      let index = this.notes.findIndex((obj) => obj.id === key);
      this.notes.splice(index, 1);
      this.keepCount();
    },
  },
  watch: {},
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