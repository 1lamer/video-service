// d - dispatch
export default {
	dFiltered({commit, state}, payload) {
		let filtered = []
		let [genres, routeName] = payload

		genres.forEach(genre => {
			filtered = [...filtered, ...state.[routeName].filter(f => f.genre === genre)]
		})

		commit('filtered', filtered)
	},

	dSearch({commit}, search) {
		commit('search', search)
	}
}