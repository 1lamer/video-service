import axios from 'axios'
import firebase from "firebase/app"
const key = process.env.VUE_APP_TMDB

export default {

	async getTrending({commit}) {
		try {
			const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
			console.log(response)
			commit('trending', response.data.results)
		} catch(e) { console.log(e) }
	},

	// async getTrending({commit}) {
	// 	try {
	// 		const trending = await firebase.database().ref('trending/')

	// 		trending.on('value', (payload) => {
	// 			const data = payload.val();
	// 			commit('trending', data);
	// 		})
	// 	} catch(e) { console.log(e) }
	// },

	// getMyList({commit}) {
	// 	const myList = firebase.database().ref('my-list/')

	// 	myList.on('value', (payload) => {
	// 		const data = payload.val();
	// 		commit('myList', data);
	// 	})
	// },
	

	async getFilms({commit}) {
		try {
			const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
			console.log(response)
			commit('films', response.data.results)
		} catch(e) { console.log(e) }
	},

	// getFilms({commit}) {
	// 	const films = firebase.database().ref('films/')

	// 	films.on('value', (payload) => {
	// 		const data = payload.val();
	// 		commit('films', data);
	// 	})
	// },

	async getShows({commit}) {
		try {
			const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`)
			console.log(response)
			commit('shows', response.data.results)
		} catch(e) { console.log(e) }
	},

	// getShows({commit}) {
	// 	const shows = firebase.database().ref('shows/')

	// 	shows.on('value', (payload) => {
	// 		const data = payload.val();
	// 		commit('shows', data);
	// 	})
	// },

	async getGenres({commit}) {
		try {
			const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`)
			commit('genres', response.data.genres)
		} catch(e) { console.log(e) }
	},

	// getGenres({commit}) {
	// 	const genres = firebase.database().ref('genres/')

	// 	genres.on('value', (payload) => {
	// 		const data = payload.val();
	// 		commit('genres', data);
	// 	})
	// },
}


// export default {
	// getTrending({commit}) {
	// 	axios('http://localhost:3000/trending', {
	// 		method: 'GET'
	// 	})
	// 	.then(response => {
	// 		commit('trending', response.data)
	// 	})
	// 	.catch(e => console.log(e))
	// },

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
