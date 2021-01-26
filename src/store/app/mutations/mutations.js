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
		console.log(search)
		state.searchResults = search
	},

	addToMyList(state, payload) {
		console.log(state, payload, 'You are fucking idiot');
		// const [content, isInMyList] = payload

		// if (content.type === 'movie') {
		// 	state.films.forEach(film => {
		// 		if (film.id === content.id) film.isInMyList = isInMyList
		// 	})
		// }

		// state.myList.forEach((item, index) => {
		// 	console.log(item.id);
		// 	console.log(index);

		// 	if (item.id === content.id) {
		// 		state.myList.splice(index, 1)
		// 	}
		// 	else {
		// 		state.myList.unshift(content)
		// 	}
		// })

		// const newList = state.myList.filter((item, index) => {
		// 	if (item.id === content.id) return false
		// 	else {

		// 	}
		// })
	}
}
