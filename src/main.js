import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Plugins
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
//

import firebase from "firebase/app"
import firebaseConfig from './firebase-init'
import "firebase/auth"
import "firebase/database"

// Styles
import '@/assets/scss/main.scss'
//

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
		firebase.initializeApp(firebaseConfig)
  }
}).$mount('#app')
