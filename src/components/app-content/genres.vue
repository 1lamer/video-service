<template>
	<section class="films__genres genres">

		<h2 class="genres__title title">Genres</h2>

		<ul class="genres__list list">

			<li
				class="genres__item list__item"
				v-for="genre in genres" :key="genre.id"
			>
				<button
					class="genres__select"
					:class="{selected: isSelected(genre.id)}"
					@click="filter(genre.id)"
				>
					<span class="genres__name">{{genre.name}}</span>
				</button>
			</li>

		</ul>
		<!-- genres__list -->

	</section>
	<!-- genree -->
</template>


<script>
import {mapState, mapActions} from 'vuex'

export default {
	name: 'genres',
	components: {

	},
	data: () => ({
		selectedGenres: [],
		routeName: ''
	}),
	computed: {
		...mapState(['genres']),
	},
	methods: {
		...mapActions(['getGenres', 'dFiltered']),

		filter(genreId) {
			/*
				Checking for exsisting of genreId in "genreIds array"
				If yes, then the genreId will be removed from array and
				in dispatch func will be passed the array without this genreId
			*/ 
			if (this.selectedGenres.includes(genreId)) {
				const id = this.selectedGenres.indexOf(genreId)
				this.selectedGenres.splice(id, 1)
				this.dFiltered([this.selectedGenres, this.$route.name])
				this.$emit('selectedGenres', this.selectedGenres)
				return
			}
			this.selectedGenres.push(genreId)
			this.dFiltered([this.selectedGenres, this.$route.name])
			this.$emit('selectedGenres', this.selectedGenres)
		},

		isSelected(genreId) {
			return this.selectedGenres.includes(genreId) ? true : false
		}
	},
	async created() {
		this.routeName = this.$route.name
		try {
			await this.getGenres(this.$route.name)
		} catch(e) { console.log(e) }
		
	},
	beforeDestroy() {
		this.dFiltered([[], this.routeName])
		this.routeName = ''
	}
}
</script>

<style lang="scss">

.genres {

	&__title {}

	&__list {}

	&__item {
		box-shadow: 2px 5px 7px -1px #333333;
	}

	&__select {
		&.selected {
			box-shadow: inset 0px 0px 0px 1px #FFFFFF;
		}
	}

	&__name {}
}

</style>
