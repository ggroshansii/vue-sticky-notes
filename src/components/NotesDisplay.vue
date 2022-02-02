<template>
    <div class="notes-display-container">
        <li v-for="note in notes" :key="note.id">{{note.note}}</li>
    </div>
</template>

<script>
    export default {
        props: {
            notes: Array,
        }
    }
</script>

<style scoped>

</style>