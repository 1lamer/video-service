<template>
	<section class="trending">

		<h2 class="trending__title title">&#128293; Trending</h2>
		
		<ul class="trending__list">
			<carousel 
				:carouselLength="trending.length"
			>
				<!-- Creating a slider by passing trending-item conponent to carousel -->
					<carouselItem v-for="(item, index) in trending" :key="index">
						<item :key="index" :item="item" />
					</carouselItem>
			</carousel>
		</ul>
		<!-- /trending__list -->
		
		
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
