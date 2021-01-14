<template>

	<section class="search-results">

		<h2 class="search-results__title title">&#128270; Search results</h2>

		<ul class="search-results__list list">
			<li class="search-results__item list__item" v-for="(item, index) in searchResults(search)" :key="index">
				<item :item="item" />
			</li>
		</ul>

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