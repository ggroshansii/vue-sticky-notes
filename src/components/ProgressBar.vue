<template>
    <div class="progress-container">
        <div class="progress-bar"></div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .progress-container {
        width: 100%;
        background-color: gray;
        height: 2rem;
    }
    .progress-bar {
        width: 10%;
        background-color: lightblue;
        transition: pass;
    }
</style>