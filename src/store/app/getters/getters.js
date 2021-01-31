export default {

	filtered: (state) => (routeName, selectedGenres) => {

		if (!state.filtered.length && !selectedGenres.length) {
			
			state.filtered = state.[routeName]
		}
		return state.filtered
	},

	// searchResults: (state) => (search) => {
	// 	let content = [...state.shows, ...state.films]

	// 	return content.filter(item => `${item.name || item.title}`.toLowerCase().includes(search.toLowerCase()))
	// }
}
