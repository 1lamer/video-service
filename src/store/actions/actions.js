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
	},

	addToMyList({commit, state}, payload) {
		let [id, isInMyList] = payload

		let content = [...state.shows, ...state.films]

		content = content.filter(item => item.id === id)
		commit('addToMyList', [content[0], isInMyList])
	}
}