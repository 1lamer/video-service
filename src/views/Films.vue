<template>
	<section class="films">

		<genres @selectedGenres="selectedGenres = $event"/>

		<h2 class="films__title title">All movies</h2>
		
		<!-- <ul class="films__list list"> -->
			<listTransition :tag="'ul'" :class="['films__list', 'list']">
				<item
					v-for="item in filtered(this.$route.name, this.selectedGenres)"
					:key="item.id"
					:item="item"
				/>
			</listTransition>
		<!-- </ul> -->

		<messageOfAbsence v-show="!filtered(this.$route.name, this.selectedGenres).length">
			It was nothing found ¯\_(ツ)_/¯
		</messageOfAbsence>

	</section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import item from '@/components/app-content/item'
import genres from '@/components/app-content/genres'
import messageOfAbsence from '@/components/UI/message-of-absence/message-of-absence'
import listTransition from '@/components/animations/list-transition'

export default {
	name: 'Films',
	components: {
		item,
		genres,
		messageOfAbsence,
		listTransition
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
	async created() {
		try {
			await this.getFilms()
		} catch(e) { console.log(e) } 
	},
	beforeDestroy() {
		// Clear filtered state in order to display default content in onther pages
		this.$store.state.filtered = []
	}
}
</script>

