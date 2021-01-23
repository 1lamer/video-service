<template>
	<button class="favorite" @click="addToMyList([id, !isInMyList])">
		<svg
			class="icon"
			width="22"
			height="22"
			fill="#ffffff"
			:class="{favorite_active: isInMyList}"
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
		id: {
			type: String,
		},
		isInMyList: {
			type: Boolean,
			default: () => false
		}
	},
	data: () => ({
		isActive: false
	}),
	methods: {
		...mapActions(['addToMyList']),
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

		&:hover {
			transform: scale(1.1)
		}

		.favorite_active {
			fill: $primary-color;
		}
	}
</style>
