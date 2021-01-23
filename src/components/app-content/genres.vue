<template>
	<section class="films__genres genres">

		<h2 class="genres__title title">Genres</h2>

		<ul class="genres__list list">

			<li
				class="genres__item list__item"
				v-for="genre in genres" :key="genre"
			>
				<button
					class="genres__select"
					:class="{selected: isSelected(genre)}"
					@click="filter(genre)"
				>
					<span class="genres__name">{{genre}}</span>
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
		selectedGenres: []
	}),
	computed: {
		...mapState(['genres']),
	},
	methods: {
		...mapActions(['getGenres', 'dFiltered']),

		filter(genre) {
			/*
				Checking for exsisting of genre in "genres array"
				If yes, then the genre will be removed from array and
				in dispatch func will be passed the array without this genre
			*/ 
			if (this.selectedGenres.includes(genre)) {
				const id = this.selectedGenres.indexOf(genre)
				this.selectedGenres.splice(id, 1)
				this.dFiltered([this.selectedGenres, this.$route.name])
				this.$emit('selectedGenres', this.selectedGenres)
				return
			}
			this.selectedGenres.push(genre)
			this.$emit('selectedGenres', this.selectedGenres)
			this.dFiltered([this.selectedGenres, this.$route.name])
		},

		isSelected(genre) {
			return this.selectedGenres.includes(genre) ? true : false
		}
	},
	async created() {
		try {
			await this.getGenres()
		} catch(e) { console.log(e) }
		
	},
	beforeDestroy() {
		this.dFiltered([[], this.$route.name])
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
