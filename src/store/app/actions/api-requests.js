import axios from 'axios'
import firebase from "firebase/app"

export default {

	getTrending({commit}) {
		const trending = firebase.database().ref('trending/')

		trending.on('value', (payload) => {
			const data = payload.val();
			commit('trending', data);
		})
	},

	getMyList({commit}) {
		const myList = firebase.database().ref('my-list/')

		myList.on('value', (payload) => {
			const data = payload.val();
			commit('myList', data);
		})
	},

	getFilms({commit}) {
		const films = firebase.database().ref('films/')

		films.on('value', (payload) => {
			const data = payload.val();
			commit('films', data);
		})
	},

	getShows({commit}) {
		const shows = firebase.database().ref('shows/')

		shows.on('value', (payload) => {
			const data = payload.val();
			commit('shows', data);
		})
	},

	getGenres({commit}) {
		const genres = firebase.database().ref('genres/')

		genres.on('value', (payload) => {
			const data = payload.val();
			commit('genres', data);
		})
	},
}


// export default {
// 	getTrending({commit}) {
// 		axios('http://localhost:3000/trending', {
// 			method: 'GET'
// 		})
// 		.then(response => {
// 			commit('trending', response.data)
// 		})
// 		.catch(e => console.log(e))
// 	},

// 	getMyList({commit}) {
// 		axios('http://localhost:3000/my-list', {
// 			method: 'GET'
// 		})
// 		.then(response => {
// 			commit('myList', response.data)
// 		})
// 		.catch(e => console.log(e))
// 	},

// 	getFilms({commit}) {
// 		axios('http://localhost:3000/films', {
// 			method: 'GET'
// 		})
// 		.then(response => {
// 			commit('films', response.data)
// 		})
// 		.catch(e => console.log(e))
// 	},

// 	getShows({commit}) {
// 		axios('http://localhost:3000/shows', {
// 			method: 'GET'
// 		})
// 		.then(response => {
// 			commit('shows', response.data)
// 		})
// 		.catch(e => console.log(e))
// 	},

// 	getGenres({commit}) {
// 		axios('http://localhost:3000/genres', {
// 			method: 'GET'
// 		})
// 		.then(response => {
// 			commit('genres', response.data)
// 		})
// 		.catch(e => console.log(e))
// 	},
// }