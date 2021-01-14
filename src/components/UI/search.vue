<template>
	<form class="header__search search" @submit.prevent="find(search)">
		<input
			class="search__input"
			placeholder="Search..."
			v-model.trim="search"
		>
		<button
			class="search__button button button--simple"
			type="submit"
		>
			Search
		</button>
	</form>
</template>

<script>
	import {mapActions} from 'vuex'

export default {
	name: 'search',
	components: {

	},
	data: () => ({
		search: ''
	}),
	computed: {
	},
	watch: {
		search() {
			if (this.$route.name !== 'search') {
				this.$router.push('/search')
			}
			this.dSearch(this.search)
		}
	},
	methods: {
		...mapActions(['dSearch']),

		find(search) {
			this.dSearch(search)
		}
	}
}
</script>