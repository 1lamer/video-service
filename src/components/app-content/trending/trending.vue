<template>
	<section class="films__trending trending">

		<h2 class="trending__title title">&#128293; Trending</h2>
		
		<ul class="trending__list">
			<carousel 
				:carouselLength="trending.length"
			>
				<!-- Creating a slider by passing trending-item conponent to carousel -->
					<carouselItem v-for="(item, index) in trending" :key="index">
						<trendingItem :key="index" :item="item" />
					</carouselItem>
			</carousel>
		</ul>
		<!-- /trending__list -->
		
		
	</section>
	<!-- /trending -->
</template>

<script>
import trendingItem from '@/components/app-content/trending/trending-item'
import carousel from '@/components/UI/carousel/carousel'
import carouselItem from '@/components/UI/carousel/carousel-item'

export default {
	name: 'Trending',
	components: {
		trendingItem,
		carousel,
		carouselItem
	},
	props: {
		trending: {
			type: Array,
			default: () => ([])
		}
	}
}
</script>
