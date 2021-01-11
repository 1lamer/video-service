<template>
	<section class="films">

		<genres />

		<h2 class="films__title title">&#127916; All movies</h2>
		
		<ul class="films__list list">
			<li class="films__item list__item" v-for="(item, index) in films" :key="index">
				<item :item="item" />
			</li>
		</ul>

	</section>
	<!-- films -->
</template>

<script>
import {mapState, mapActions} from 'vuex'
import item from '@/components/app-content/item'
import genres from '@/components/app-content/genres'

export default {
	name: 'Films',
	components: {
		item,
		genres
	},
	data: () => ({

	}),
	computed: {
		...mapState(['films'])
	},
	methods: {
		...mapActions(['getFilms'])
	},
	created() {
		this.getFilms()
	}
}
</script>
