<template>
	<section class="films__genres genres">

		<h2 class="genres__title title">&#127917; Genres</h2>

		

		<ul class="genres__list list">

			<li
				class="genres__item list__item"
				v-for="genre in genres" :key="genre"
			>
				<a href="#" class="genres__link genres__link--comedies">
					<h3 class="genres__name">{{genre}}</h3>
				</a>
			</li>

		</ul>
		<!-- genres__list -->

		<!-- <button class="genres__button button">
			Show more
		</button> -->

	</section>
	<!-- genree -->
</template>


<script>
import {mapState, mapActions} from 'vuex'

export default {
	name: 'Genres',
	components: {

	},
	data: () => ({

	}),
	computed: {
		...mapState(['genres'])
	},
	methods: {
		...mapActions(['getGenres'])
	},
	created() {
		this.getGenres()
	}
}
</script>