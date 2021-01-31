import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store/app'

// Plugins
import Vuelidate from 'vuelidate'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import messagePlugin from '@/utils/message-plugin'
import debounce from '@/utils/debounce'

Vue.use(Vuelidate)
Vue.use(Vuetify)
Vue.use(messagePlugin)
Vue.use(debounce)
//


// Backend
import firebase from "firebase/app"
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
  vuetify: new Vuetify(),
  render: h => h(App),
  created() {
  	firebase.initializeApp(firebaseInit.firebaseConfig)
  	firebaseInit.authState.call(this)
  },
}).$mount('#app')
