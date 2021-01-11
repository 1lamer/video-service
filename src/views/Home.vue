<template>
	<section class="films">

		<trending :trending="trendingFilms"/>

		<section class="films__genre genres">

			<h2 class="genres__title title">&#127917; Genres</h2>

			<ul class="genres__list">

				<li class="genres__item">
					<a href="#" class="genres__link genres__link--comedies">
						&#128513;
						<h3 class="genres__name">Comedies</h3>
					</a>
				</li>

				<li class="genres__item">
					<a href="#" class="genres__link genres__link--dramas">
						&#128546;
						<h3 class="genres__name">Dramas</h3>
					</a>
				</li>

				<li class="genres__item">
					<a href="#" class="genres__link genres__link--fantasy">
						&#128125;
						<h3 class="genres__name">Fantasy</h3>
					</a>
				</li>

				<li class="genres__item">
					<a href="#" class="genres__link genres__link--horrors">
						&#128123;
						<h3 class="genres__name">Horrors</h3>
					</a>
				</li>
			</ul>
			<!-- genres__list -->
		</section>
		<!-- genree -->
	</section>
	<!-- films -->
</template>

<script>
import trending from '@/components/app-content/trending/trending'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Home',
	components: {
		trending
	},
	data: () => ({

	}),
	computed: {
		...mapState(['trendingFilms'])
	},
	methods: {
		...mapActions(['getTrendingFilms'])
	},
	created() {
		this.getTrendingFilms()
	}
}
</script>
