<template>
  <div class="note-input-container">
    <div v-if="isVisible" class="alert-banner">Cannot exceed 10</div>
    <h2>Enter Sticky Note:</h2>
    <textarea
      v-model="currentNote"
      @keyup.enter="submitNote"
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="Add Sticky Note Here"
    ></textarea>
    <button class="btn btn-primary" @click.enter="submitNote">
      Add Sticky Note
    </button>
  </div>
</template>

<script>
import {eventBus} from "../main";
export default {
  data: function () {
    return {
      currentNote: "",
      notes: [],
      isVisible: false,
    };
  },
  methods: {
    submitNote() {
      if (this.notes.length < 10) {
        let id = this.$uuid.v1();
        this.notes.push({ id: id, note: this.currentNote });
        this.$emit("updatedNotes", this.notes);
        eventBus.$emit("increaseCount", this.count);
        this.currentNote = "";
      } else {
        this.isVisible = true;
        setTimeout(() => {
          this.isVisible = false;
        }, 2000);
      }
    },
  },
  computed: {
    count: function () {
      return this.notes.length;
    },
  },
};
</script>

<style scoped>
.alert-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: tomato;
  height: 6rem;
  width: 50%;
  color: white;
  border-radius: 5px;
  font-size: 2rem;
  border: 2px solid red;
}

h2 {
  font-family: lobster;
  font-size: 4rem;
  margin-bottom: 1rem;
}
.note-input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}

textarea {
  width: 400px;
  border: 3px solid black;
}

button {
  background-color: steelblue;
  color: white;
  margin-top: 1rem;
}
</style>