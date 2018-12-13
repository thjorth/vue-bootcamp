import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// globally available components
import header from './components/header';

// styles
import './scss/index.scss';

Vue.component('c-header', header);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
