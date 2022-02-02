<template>
    <div class="container">
        <app-progress-bar></app-progress-bar>
        <app-note-input @updatedNotes="notes = $event"></app-note-input>
        <app-note-display :notes="notes"></app-note-display>
    </div>
</template>

<script>
    import ProgressBar from "./components/ProgressBar.vue";
    import NoteInput from "./components/NoteInput.vue";
    import NoteDisplay from "./components/NotesDisplay.vue";
    export default {
        data: function() {
            return {
                notes: null,
            }
        },
        components: {
            appProgressBar: ProgressBar,
            appNoteInput: NoteInput,
            appNoteDisplay: NoteDisplay
        },
        watch: {
            notes: function() {
                console.log(this.notes)
            }
        }
    }
</script>

<style scoped>
    .container {
        height: 100vh;
        width: 100vw;
    }
</style>
