import axios from 'axios'

export default {
	getTrending({commit}) {
		axios('http://localhost:3000/trending', {
			method: 'GET'
		})
		.then(response => {
			commit('trending', response.data)
		})
		.catch(e => console.log(e))
	},

	getMyList({commit}) {
		axios('http://localhost:3000/my-list', {
			method: 'GET'
		})
		.then(response => {
			commit('myList', response.data)
		})
		.catch(e => console.log(e))
	},

	getFilms({commit}) {
		axios('http://localhost:3000/films', {
			method: 'GET'
		})
		.then(response => {
			commit('films', response.data)
		})
		.catch(e => console.log(e))
	},

	getShows({commit}) {
		axios('http://localhost:3000/shows', {
			method: 'GET'
		})
		.then(response => {
			commit('shows', response.data)
		})
		.catch(e => console.log(e))
	},

	getGenres({commit}) {
		axios('http://localhost:3000/genres', {
			method: 'GET'
		})
		.then(response => {
			commit('genres', response.data)
		})
		.catch(e => console.log(e))
	},
}