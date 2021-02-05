<template>
	<div class="carousel" ref="carousel">

		<div
			class="carousel__wrapper"
			ref="carousel_wrapper"
			:style="{'transform': `translateX(${position}px)`}"
		>

			<!-- Items of carousel -->
			<slot></slot>

		</div>

		<!-- Navigation arrows -->
		<button
			class="carousel__prev"
			@click="switchPrev"
			:disabled="position === 0"
		>
			<svg class="carousel__icon" width="50" height="50">
				<use xlink:href="@/assets/img/sprite.svg#arrow-prev"></use>
			</svg>
		</button>
		<button
			class="carousel__next"
			@click="switchNext"
			:disabled="position <= - (carouselLength - itemsToShow) * (itemWidth + margin)"
		>
			<svg class="carousel__icon" width="50" height="50">
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
		itemWidth: 200,
		margin: 20,
		position: 0,
		itemsToScroll: 0,
		itemsToShow: 0,
		interval: 0,
		setInterval: null,
	}),
	methods: {
		init() {
			if (this.$refs.carousel.offsetWidth) this.carouselWidth = this.$refs.carousel.offsetWidth
			this.itemsToScroll = this.itemsToShow = Math.ceil(this.carouselWidth / (this.itemWidth + this.margin))
		},

		switchPrev() {
			const width = this.itemWidth + this.margin
			const move = width * this.itemsToScroll
			const itemsLeft =  Math.ceil(Math.abs(this.position) / width)
			
			this.position+= itemsLeft >= this.itemsToShow
			? move
			: itemsLeft * width
		},

		switchNext() {
			const width = this.itemWidth + this.margin
			const move = width * this.itemsToScroll
			const initial = this.itemsToShow * width
			const itemsLeft = this.carouselLength - Math.ceil((Math.abs(this.position) + initial) / width)

			this.position-= itemsLeft >= this.itemsToShow
			? move
			: itemsLeft * width
		}
	},
	mounted() {
		window.addEventListener('resize', this.init)
		this.init()
		
		if (this.interval > 0) {
			this.setInterval = setInterval(() => {
				this.switchNext()
			}, this.interval)
		}

	},
	beforeDestroy() {
		clearInterval(this.setInterval)
		window.removeEventListener('resize', this.init())
	}
}
</script>

<style lang="scss">
	.carousel {
		position: relative;

		margin: 0 auto;

		// overflow: hidden;

		@media screen and (max-width: $maxDesktopWidth) {
	    max-width: 1100px;// 1080px;
	  }
	  @media screen and (max-width: $desktopWidth) {
	    max-width: 880px;// 860px;
	  }
	  @media screen and (max-width: $smDesktopWidth) {
	    max-width: 660px;//640px;
	  }
	  @media screen and (max-width: $tableWidth) {
	    max-width: 440px;//420px;
	  }
	  @media screen and (max-width: $phoneWidth) {
	    max-width: 220px;//200px;
	  }

		&__wrapper {
			display: flex;
			padding-left: 10px;

			transition: .5s ease all;
		}

		&__prev, &__next {
			position: absolute;
			top: 38%;

			background-color: rgba(0, 0, 0, 0.6);
			border: none;
			border-radius: 20px;

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

		&__icon {
			fill: #fff;
		}
	}
</style>
