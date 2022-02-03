<template>
    <div class="progress-container">
        <div class="progress-bar" :style="{width: (count*10) + '%'}"></div>
    </div>
</template>

<script>
import {eventBus} from "../main";
    export default {
        data: function() {
            return {
                count: null
            }
        },
        props: {

        },
        created() {

            eventBus.$on('increaseCount', (newCount) => {
                this.count = newCount
            })
            eventBus.$on('decreaseCount', (newCount) => {
                this.count = newCount
            })
        }
    }
</script>

<style scoped>
    .progress-container {
        width: 80%;
        background-color: lightgray;
        height: 3rem;
        margin: 3rem auto;
    }
    .progress-bar {
        background-color: #1370FB;
        transition: pass;
        
    }
</style>