<template>
	<section class="my-list">

		<h2 class="my-list__title title">&#128420; My list</h2>

		<ul class="my-list__list list">
			<li class="my-list__item list__item" v-for="(item, index) in myList" :key="index">
				<item :item="item" />
			</li>
		</ul>
		
	</section>
	<!-- /home -->
</template>

<script>
import {mapState, mapActions} from 'vuex'
import item from '@/components/app-content/item'


export default {
	name: 'myList',
	components: {
		item
	},
	props: {
		list: {
			type: Array,
			default: () => []
		}
	},
	data: () => ({

	}),
	computed: {
		...mapState(['myList'])
	},
	methods: {
		...mapActions(['getMyList'])
	},
	created() {
		this.getMyList()
	}
}
</script>