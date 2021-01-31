<template>
	<form
		class="header__search search"
		@submit.prevent="find(search)"
		tabindex="-1"
		@click="focusInput()"
		:class="{focused}"
	>
		<input
			class="search__input"
			placeholder="Search..."
			v-model.trim="search"
			ref="input"
			tabindex="0"
			@focus="focusInput()"
			@blur="focused = false"
		>

		<svg class="search__icon" width="25" height="25">
			<use xlink:href="@/assets/img/sprite.svg#search" />
		</svg>
		
	</form>
</template>

<script>
	import {mapActions} from 'vuex'

export default {
	name: 'search',
	components: {

	},
	data: () => ({
		search: '',
		focused: false
	}),
	computed: {
	},
	watch: {
		async search() {
			if (this.$route.name !== 'search') {
				this.$router.push('/search')
			}
			try {
				await this.getSearchResults(this.search)
			} catch(e) { console.log(e) }
		}
	},
	methods: {
		...mapActions(['getSearchResults']),

		async find(search) {
			try {
				await this.getSearchResults(search)
			} catch(e) { console.log(e) }
		},

		focusInput() {
			this.focused = true
			this.$refs.input.focus()
		}
	}
}
</script>

<style lang="scss">
	
.search {
	position: relative;

	width: 30px;
	height: 30px;

	border-radius: 50%;
	overflow: hidden;
	background-color: $primary-color;

	outline: none;

	transition: all 0.2s;

	&.focused {
		width: 200px;

		border-radius: 0;
		background-color: #fff;

		.search__input { 
			padding-right: 40px;

			border-bottom: 1px solid $primary-color;
			opacity: 1;
		}

		.search__icon { fill: $primary-color; }
	}

	&:hover { cursor: pointer; }

	&__input {
		position: absolute;
		top: 0;
		left: 0;

		width: 100%;
		height: 30px;
		

		opacity: 0;
		border-bottom: none; 
		
		outline: 0;

		transition: all 0.3s;
	}

	&__icon {
		position: absolute;
		top: 2px;
		right: 2px;

		border-radius: 50%;
		fill: #fff;

		text-align: center;

		transition: all 0.3s;
	}
}

</style>
