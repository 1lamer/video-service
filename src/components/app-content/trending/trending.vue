<template>
	<section class="trending">

		<h2 class="trending__title title">Trending</h2>
		
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