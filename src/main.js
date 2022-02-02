import Vue from 'vue'
import App from './App.vue'
import UUID from 'vue-uuid';

Vue.use(UUID);

new Vue({
  el: '#app',
  render: h => h(App)
})

