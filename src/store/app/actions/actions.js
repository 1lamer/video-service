// d - dispatch
export default {
	dFiltered({commit, state}, payload) {
		let filteredContent = []
		let filteredIds = []
		let id
		let [genresIds, routeName] = payload

		genresIds.forEach(genreId => {
			filteredContent = [...filteredContent, ...state.[routeName].filter(content => {
				// Checking is there the same item (film or show) in filtered list
				if (content.genre_ids.includes(genreId) && !filteredIds.includes(content.id)) {
					filteredIds.push(content.id)
					return true
				}
			})]
		})
		commit('filtered', filteredContent)
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
