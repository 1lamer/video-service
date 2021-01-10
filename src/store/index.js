import Vue from 'vue'
import Vuex from 'vuex'

import mutations from '@/store/mutations/mutations'
import getters from '@/store/getters/getters'
import commonActions from '@/store/actions/actions'
import apiRequests from '@/store/actions/api-requests'

const actions = {...commonActions, ...apiRequests}

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		trendingFilms: []
	},
	mutations,
	actions,
	getters,
	modules: {}
})
