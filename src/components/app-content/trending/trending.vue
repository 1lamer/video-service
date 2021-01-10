<template>
	<section class="films__trending trending">

		<h2 class="trending__title title">&#128293; Trending</h2>
		
		<ul class="trending__list">
			<trendingItem v-for="(item, index) in trending" :key="index" :item="item" />
		</ul>
		<!-- trending__list -->
		
	</section>
	<!-- trending -->
</template>

<script>
import trendingItem from '@/components/app-content/trending/trending-item'
import carousel from '@/components/UI/carousel/carousel'

export default {
	name: 'Trending',
	components: {
		trendingItem
	},
	props: {
		trending: {
			type: Array,
			default: () => ([])
		}
	}
}
</script>
