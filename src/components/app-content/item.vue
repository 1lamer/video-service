<template>

	<li class="list__item item">
		<a class="item__link">
			<img :src="require('@/assets/img/' + item.image)" alt="poster" class="item__poster">

			<p class="item__description">
					{{item.description}}
			</p>

			<h3 class="item__name">{{item.name}}</h3>

			<favorite :id="item.id" :isInMyList="item.isInMyList"/>
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

