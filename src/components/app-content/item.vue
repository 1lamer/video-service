<template>

	<li class="list__item item">
		<a class="item__link" @click="contentInfo(item.media_type, item.id)">
			<img
				:src="item.poster_path
					? `https://image.tmdb.org/t/p/w500/${item.poster_path}`
					: require('@/assets/img/no-img.jpg')
				"
				alt="poster"
				class="item__poster"
			>
			<h3 class="item__name">{{item.title || item.name}}</h3>
		</a>
		
		<favorite :content="item"/>
	</li>

</template>

<script>
	import {mapActions} from 'vuex'
	import favorite from '@/components/UI/favorite/favorite'

	export default {
		name: 'item',
		components: {
			favorite,
		},
		props: {
			item: {
				type: Object,
				default: () => ({})
			}
		},
		data: () => ({
			isActive: false
		}),
		methods: {
			...mapActions(['getContentInfo']),

			async contentInfo(type, id) {
				try {
					await this.getContentInfo([type, id])
				} catch(e) { console.log(e) } 
			}
		}
	}
</script>

