<template>
    <div class="progress-container">
        <div class="progress-bar" :style="{width: (count*10) + '%'}"></div>
    </div>
</template>

<script>
    export default {
        props: {
            count: Number,
        }
    }
</script>

<style scoped>
    .progress-container {
        width: 100%;
        background-color: gray;
        height: 2rem;
    }
    .progress-bar {
        background-color: lightblue;
        transition: pass;
    }
</style>