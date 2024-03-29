import Vue from 'vue'
import App from './App.vue'
import UUID from 'vue-uuid';

Vue.use(UUID);

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})

