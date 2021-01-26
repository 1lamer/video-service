<template>

	<li class="list__item item">
		<a class="item__link">
			<img :src="`https://image.tmdb.org/t/p/w500/${item.poster_path}`" alt="poster" class="item__poster">

			<p class="item__description">
					{{item.overview}}
			</p>

			<h3 class="item__name">{{item.title || item.name}}</h3>

			<favorite :id="item.id" />
		</a>
	</li>

</template>

<script>
import favorite from '@/components/UI/favorite/favorite'

export default {
	name: 'item',
	components: {
		favorite
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

