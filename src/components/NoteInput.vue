<template>
  <div class="note-input-container">
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
    <button @click.enter="submitNote">Add Sticky Note</button>
  </div>
</template>

<script>
    export default {
        data: function() {
            return {
                currentNote: "",
                notes: [],
            }
        },
        methods: {
            submitNote() {
                let id = this.$uuid.v1();
                this.notes.push({'id': id, 'note': this.currentNote})
                this.$emit('updatedNotes', this.notes)
                this.$emit('updatedCount', this.count)
                this.currentNote = "";
            }
        },
        computed: {
            count: function() {
                return this.notes.length;
            }
        }

    }
</script>

<style scoped>
h2 {
    font-family: lobster;
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
}
</style>