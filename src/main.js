import 'bulma/css/bulma.css'
import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue'
import App from './App.vue'
//import AppPlayer from './AppXPlayer.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
