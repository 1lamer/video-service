<template>

	<li class="trending__item">
		<a href="#" class="trending__link">
				<img :src="require('@/assets/img/' + item.image)" alt="poster" class="trending__poster">

				<p class="trending__description">
						{{item.description}}
				</p>

			<h3 class="trending__name">{{item.name}}</h3>
		</a>
	</li>
	<!-- /trending__item -->

</template>

<script>

export default {
	name: 'Trending-item',
	components: {
	},
	props: {
		item: {
			type: Object,
			default: () => ({})
		}
	},
	data: () => ({
		
	})
}
</script>
