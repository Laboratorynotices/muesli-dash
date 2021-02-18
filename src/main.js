import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import germanFloatFilter from '@/filters/float.filter'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.filter('germanFloat', germanFloatFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
