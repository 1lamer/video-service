import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/app'

// Plugins
import Vuelidate from 'vuelidate'
import messagePlugin from '@/utils/message-plugin'


Vue.use(Vuelidate)
Vue.use(messagePlugin)
//


// Backend
import firebase from "firebase/app"
// import firebaseConfig from './firebase-init'
import firebaseInit from './firebase-init'
import "firebase/auth"
import "firebase/database"
//

// Styles
import '@/assets/scss/main.scss'
//

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created() {
		firebase.initializeApp(firebaseInit.firebaseConfig)
		// firebaseInit.authState()
  }
}).$mount('#app')
