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
        background-color: lightgray;
        height: 3rem;
        margin-top: 3rem;
    }
    .progress-bar {
        background-color: #1370FB;
        transition: pass;
        
    }
</style>