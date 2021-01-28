<template>
	<button class="favorite" @click="changeMyList(content)">
		<svg
			class="icon"
			width="22"
			height="22"
			fill="#ffffff"
			:class="{favorite_active: isActive}"
		>
			<use xlink:href="@/assets/img/sprite.svg#heart"></use>
		</svg>
	</button>
</template>

<script>
import {mapActions} from 'vuex'

export default {
	name: 'favorite',
	components: {
	},
	props: {
		content: {
			type: Object,
			default: () => {}
		},
	},
	data: () => ({
		isActive: true
	}),
	methods: {
		...mapActions(['changeMyList']),
	},
	created() {
	}
}
</script>


<style lang="scss">

	.favorite {
		position: absolute;
		right: 4%;
		top: 250px;

		width: 40px;
		height: 40px;
		padding: 5px;

		border-radius: 50%;
		background-color: rgba(0, 0, 0, 0.8);

		cursor: pointer;

		text-align: center;

		transition: all .2s;

		&:hover, &:focus {
			transform: scale(1.1)
		}

		&:active {
			transform: scale(0.9)
		}

		.favorite_active {
			fill: $primary-color;
		}
	}
</style>
