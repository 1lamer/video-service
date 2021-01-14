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

	search(state, search) {
		state.search = search
	}
}