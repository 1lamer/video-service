<template>

	<section class="search-results">

		<h2 class="search-results__title title">Search results</h2>

		<ul class="search-results__list list">
			<item v-for="(item, index) in searchResults(search)" :key="index" :item="item"/>
		</ul>

		<p class="search-results__notFound" v-show="!searchResults(search).length">It was nothing found ¯\_(ツ)_/¯</p>
	</section>

</template>


<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import item from '@/components/app-content/item'

export default {
	name: 'SearchResults',
	components: {
		item,
	},
	computed: {
		...mapGetters(['searchResults']),
		...mapState(['search']),
	},
	methods: {
		...mapActions(['getShows', 'getFilms'])
	},
	created() {
		this.getShows()
		this.getFilms()
	},
	beforeDestroy() {
		// Clear filtered state in order to display default content in onther pages
		this.$store.state.filtered = []
	}
}
</script>