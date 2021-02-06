<template>
	<section class="trending">

		<h2 class="trending__title title">Trending</h2>
		
		<!-- <ul class="trending__list">
			<carousel 
				:carouselLength="trending.length"
			>
				Creating a slider by passing trending-item conponent to carousel
					<carouselItem v-for="(item, index) in trending" :key="index">
						<item :key="index" :item="item" />
					</carouselItem>
			</carousel>
		</ul> -->
		<!-- /trending__list -->

		<!-- Swiper connection -->
		<div v-swiper:trendingSwiper="swiperOption" class="swiper-container content-info__credits credits">
			<ul class="trending__list swiper-wrapper">
				<item
					v-for="item in trending"
					:key="item.id"
					:item="item"
					class="trending__item swiper-slide"
				/>
			</ul>

			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
		</div>
		<!-- /swiper -->
		
		
	</section>
	<!-- /trending -->
</template>

<script>
	import item from '@/components/app-content/item'
	import carousel from '@/components/UI/carousel/carousel'
	import carouselItem from '@/components/UI/carousel/carousel-item'

	export default {
		name: 'Trending',
		components: {
			item,
			// carousel,
			// carouselItem
		},
		props: {
			trending: {
				type: Array,
				default: () => ([])
			}
		},
		data: () => ({
			swiperOption: {
				slidesPerView: 2,
				spaceBetween: 20,
				slidesPerGroup: 2,
				breakpoints: {
					0: {},
					320: {
						spaceBetween: 5,
					},
					480: {
						spaceBetween: 20,
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
						slidesPerGroup: 2,
					},
					1024: {
						slidesPerView: 4,
						slidesPerGroup: 4,
					},
					1200: {
						slidesPerView: 5,
					},
					1360: {
						slidesPerView: 6,
					}
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				},
			},
		}),
		mounted() {
			this.trendingSwiper.slideTo(0, 1500, true)
		}
	}
</script>

<style lang="scss" scoped>

	.swiper-container { overflow: visible; }

	.swiper-button-next,
	.swiper-button-prev {
		top: 40%;

		color: #fff !important;
	}

	.swiper-button-next {
		right: 0;
	}
	.swiper-button-prev {
		left: 0;
	}
	
</style>

<!-- 
<style lang="scss">

	.trending {

		&__title {}

		&__list {
			.item {
				margin-right: 0;
				margin-bottom: 0;
			}
		}
	}

</style>
 -->
