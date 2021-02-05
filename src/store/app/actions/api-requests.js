import axios from 'axios'
import firebase from "firebase/app"
import store from '@/store/app'
const key = process.env.VUE_APP_TMDB

export default {

	async getSearchResults({commit}, search) {
		try {
			const responseMovie = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}
				&language=en-US
				&query=${search}
				&page=1
				&include_adult=false
			`)
			const dataMovie = responseMovie.data.results
			dataMovie.forEach(d => d.media_type = 'movie')

			const responseTv = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${key}
				&language=en-US
				&query=${search}
				&page=1&include_adult=false
			`)
			const dataTv = responseTv.data.results
			dataTv.forEach(d => d.media_type = 'tv')

			commit('searchResults', [...dataMovie, ...dataTv])
		} catch(e) { console.log(e) }
	},


	async getTrending({commit}) {
		try {
			const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
			commit('trending', response.data.results)
		} catch(e) { console.log(e) }
	},
 

	async getMyList({commit, dispatch, state}) {
		try {
			const id = await dispatch('getUid')
			if (id) {
				await firebase
					.database()
					.ref(`users/${id}/my-list`)
					.orderByChild('timestamp')
					.on('value', (snapshot) => {
						const data = snapshot.val() || {}
						commit('myList', data)
					})
			}
		} catch(e) { console.log(e) }
	},


	async changeMyList({dispatch, state, commit}, content) {
		const id = await dispatch('getUid')
		const isThereContent = Object.prototype.hasOwnProperty.call(state.myList, content.id)
		const contentName = content.name || content.title

		if (!isThereContent && id) {
			try {
				// Expose message via snackbar about successuf adding
				store.commit('setMessage', `${contentName}: added to your list`)
				store.commit('changeIsShow', true)

				firebase.database()
								.ref(`users/${id}/my-list`)
								.child(content.id)
								.set(content)
			} catch(e) { console.log(e) }
			
		} else if (isThereContent && id) {
			try {
				// Expose message via snackbar about successuf removing
				store.commit('setMessage', `${contentName}: removed from your list`)
				store.commit('changeIsShow', true)

				firebase.database()
								.ref(`users/${id}/my-list`)
								.child(content.id)
								.remove()
			} catch(e) { console.log(e) }
		}
	},

	async getFilms({commit}) {
		try {
			const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
			const data = response.data.results
			data.forEach(d => d.media_type = 'movie')

			commit('films', data)
		} catch(e) { console.log(e) }
	},


	async getShows({commit}) {
		try {
			const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`)
			const data = response.data.results
			data.forEach(d => d.media_type = 'tv')

			commit('shows', data)
		} catch(e) { console.log(e) }
	},


	async getGenres({commit}, routeName) {
		let type
		try {

			if (routeName === 'films') type = 'movie'
			else if (routeName === 'shows') type = 'tv'

			const response = await axios.get(`https://api.themoviedb.org/3/genre/${type}/list?api_key=${key}&language=en-US`)
			commit('genres', response.data.genres)
		} catch(e) { console.log(e) }
	},

	async getContentInfo({commit}, payload) {
		const [type, id] = payload
		try {
			const response = await axios.get(`https://api.themoviedb.org/3/${type}/${id}
																				?api_key=${key}
																				&language=en-US
																				&append_to_response=videos,images,credits
																			`)
			commit('contentInfo', response.data)
		} catch(e) {
			console.log(e)
		}
	}
}





/////////////////////////////////
// export default {

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

	// getFilms({commit}) {
	// 	const films = firebase.database().ref('films/')

	// 	films.on('value', (payload) => {
	// 		const data = payload.val();
	// 		commit('films', data);
	// 	})
	// },

	// getShows({commit}) {
	// 	const shows = firebase.database().ref('shows/')

	// 	shows.on('value', (payload) => {
	// 		const data = payload.val();
	// 		commit('shows', data);
	// 	})
	// },

	// getGenres({commit}) {
	// 	const genres = firebase.database().ref('genres/')

	// 	genres.on('value', (payload) => {
	// 		const data = payload.val();
	// 		commit('genres', data);
	// 	})
	// },
// }

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
