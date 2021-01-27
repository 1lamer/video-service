// d - dispatch
export default {
	dFiltered({commit, state}, payload) {
		let filteredContent = []
		let filteredIds = []
		let [genresIds, routeName] = payload
		
		filteredContent = [
			// Filter an array of preceding filtered content to check are they suited to new genres
			...filteredContent.filter(content => checkIds(content.genre_ids, genresIds)),

			...state.[routeName].filter(content => {
				/*
					Checking is there the same item (film or show) in filtered list
				*/
				if (checkIds(content.genre_ids, genresIds) && !filteredIds.includes(content.id)) {
					filteredIds.push(content.id)
					return true
				}
			})
		]
		
		commit('filtered', filteredContent)
	},

	/*dSearch({commit}, search) {
		commit('search', search)
	},*/

	addToMyList({commit, state}, payload) {
		let [id, isInMyList] = payload
		console.log(id)

		let content = [...state.shows, ...state.films]

		content = content.filter(item => item.id === id)
		commit('addToMyList', [content[0], isInMyList])
	}
}

// Checking are there all content ids in the genresIds
function checkIds(contentIds, genresIds) {
	const length = genresIds.length
	let count = 0

	contentIds.forEach(id => {
		if (genresIds.includes(id)) count++
	})
	return count === length
}
