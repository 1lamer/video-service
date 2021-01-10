import axios from 'axios'

export default {
	getTrendingFilms({commit}) {
		axios('http://localhost:3000/films', {
			method: 'GET'
		})
		.then(response => {
			commit('trendingFilms', response.data)
		})
		.catch(e => console.log(e))
	},
}