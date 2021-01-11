<template>
	<div class="carousel">

		<div
			class="carousel__wrapper"
			ref="carousel"
			:style="{'transform': `translateX(${position}px)`}">

			<!-- Items of carousel -->
			<slot></slot>

		</div>

		<!-- Navigation arrows -->
		<button
			class="carousel__prev"
			@click="switchPrev"
			:disabled="position === 0"
		>
			<svg width="50" height="50">
				<use xlink:href="@/assets/img/sprite.svg#arrow-prev"></use>
			</svg>
		</button>
		<button
			class="carousel__next"
			@click="switchNext"
			:disabled="position <= - (carouselLength - itemsToShow) * itemWidth"
		>
			<svg width="50" height="50">
				<use xlink:href="@/assets/img/sprite.svg#arrow-next"></use>
			</svg>
		</button>
	</div>
</template>

<script>

export default {
	name: 'carousel',
	components: {
	},
	props: {
		carouselLength: {
			type: Number,
			default: 0
		},
		
	},
	data: () => ({
		carouselWidth: 0,
		itemWidth: 0,
		position: 0,
		itemsToScroll: 4,
		itemsToShow: 4,
		interval: 0,
		setInterval: null
	}),
	methods: {
		switchPrev() {
			const movePos = this.itemWidth * this.itemsToScroll
			const itemsLeft = Math.abs(this.position) / this.itemWidth
			
			this.position+= itemsLeft >= this.itemsToShow ? movePos : itemsLeft * this.itemWidth

			// Clear interval 
			if (this.position === 0) {
				clearInterval(this.setInterval)
			}
		},
		switchNext() {
			const movePos = this.itemWidth * this.itemsToScroll
			const initial = this.itemsToShow * this.itemWidth
			const itemsLeft = this.carouselLength - (Math.abs(this.position) + initial) / this.itemWidth

			this.position-= (itemsLeft >= this.itemsToShow) ? movePos : (itemsLeft * this.itemWidth)

			// Clear interval 
			if (this.position <= - (this.carouselLength - this.itemsToShow) * this.itemWidth) {
				clearInterval(this.setInterval)
			}
		}
	},
	created() {

	},
	mounted() {
		this.carouselWidth = this.$refs.carousel.clientWidth
		this.itemWidth = this.carouselWidth / this.itemsToShow
		
		if (this.interval > 0) {
			this.setInterval = setInterval(() => {
				this.switchNext()
			}, this.interval)
		}
	},
	beforeDestroy() {
		clearInterval(this.setInterval)
	}
}
</script>

<style lang="scss">
	.carousel {
		position: relative;

		overflow: hidden;

		&__wrapper {
			display: flex;
			// justify-content: space-between;

			margin: 0 -10px;

			transition: .5s ease all;
		}

		&__prev, &__next {
			position: absolute;
			top: 40%;

			background-color: rgba(0, 0, 0, 0.6);
			border: none;
			border-radius: 50%;

			cursor: pointer;

			transition: .2s all;

			&:hover, &:focus {
				background-color: rgba(0, 0, 0, 0.9);
			}

			&:disabled {
				background-color: #000;
				opacity: 0.2;
			}
		}

		&__prev {
			left: 0;
		}

		&__next {
			right: 0;
		}
	}
</style>