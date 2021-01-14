<template>
	<section class="films">

		<genres @selectedGenres="selectedGenres = $event"/>

		<h2 class="films__title title">&#127916; All movies</h2>
		
		<ul class="films__list list">
			<li class="films__item list__item" v-for="(item, index) in filtered(this.$route.name, this.selectedGenres)" :key="index">
				<item :item="item" />
			</li>
		</ul>

	</section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import item from '@/components/app-content/item'
import genres from '@/components/app-content/genres'

export default {
	name: 'Films',
	components: {
		item,
		genres
	},
	data: () => ({
		selectedGenres: []
	}),
	computed: {
		...mapGetters(['filtered']),
	},
	methods: {
		...mapActions(['getFilms']),
	},
	created() {
		this.getFilms()
	},
	beforeDestroy() {
		// Clear filtered state in order to display default content in onther pages
		this.$store.state.filtered = []
	}
}
</script>
