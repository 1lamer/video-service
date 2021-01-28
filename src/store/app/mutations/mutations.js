export default {
	trending(state, items) {
		state.trending = items
	},

	myList(state, list) {
		state.myList = list
	},

	films(state, films) {
		state.films = films
	},

	shows(state, shows) {
		state.shows = shows
	},

	genres(state, genres) {
		state.genres = genres
	},

	filtered(state, payload) {
		state.filtered = payload
	},

	searchResults(state, search) {
		state.searchResults = search
	},

	// addToMyList(state, content) {
	// 	state.myList[content.id] = content
 // 	}
}
