<template>
    <div class="note-input-container">
        <h2>Enter Sticky Note:</h2>
        <textarea v-model="currentNote" name="" id="" cols="30" rows="10" placeholder="Add Sticky Note Here"></textarea>
        <button @click="submitNote">Add Sticky Note</button>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                currentNote: "",
                notes: []
            }
        },
        methods: {
            submitNote() {
                let id = this.$uuid.v1()
                this.notes.push({'id': id, 'note': this.currentNote})
                this.$emit('updatedNotes', this.notes)
            }
        }

    }
</script>

<style scoped>
    .note-input-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    textarea {
        width: 400px;
    }
</style>