import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import auth from '@/store/auth/auth'

import mutations from '@/store/app/mutations/mutations'
import getters from '@/store/app/getters/getters'
import commonActions from '@/store/app/actions/actions'
import apiRequests from '@/store/app/actions/api-requests'

const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		trending: [],
		myList: [],
		films: [],
		shows: [],
		genres: [],
		filtered: [],
		search: ''
	},
	mutations,
	actions,
	getters,
	modules: {
		auth
	}
})
