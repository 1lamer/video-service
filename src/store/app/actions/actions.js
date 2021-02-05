// d - dispatch
export default {
	dFiltered({commit, state}, payload) {
		let filteredContent = []
		let filteredIds = []
		let [genresIds, routeName] = payload

		/*
			When beforedestroy hook called 
			we need to avoid of committng precede 'filteredContent'. 
			Thus we need to check for the length of genresIds
		*/ 

		if (genresIds.length) {

			filteredContent = [
				/*
					Filter an array of preceding filtered 
					content to check are they suited to new genres
				*/
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
		}
		commit('filtered', filteredContent)
	},

	/*dSearch({commit}, search) {
		commit('search', search)
	},*/
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
