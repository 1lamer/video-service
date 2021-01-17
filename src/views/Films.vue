<template>
	<section class="films">

		<genres @selectedGenres="selectedGenres = $event"/>

		<h2 class="films__title title">All movies</h2>
		
		<ul class="films__list list">
			<item v-for="(item, index) in filtered(this.$route.name, this.selectedGenres)" :key="index" :item="item" />
		</ul>

		<notFound v-show="!filtered(this.$route.name, this.selectedGenres).length"/>

	</section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import item from '@/components/app-content/item'
import genres from '@/components/app-content/genres'
import notFound from '@/components/UI/notFound'

export default {
	name: 'Films',
	components: {
		item,
		genres,
		notFound
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
