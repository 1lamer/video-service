<template>
	<section class="my-list">

		<h2 class="my-list__title title">&#128420; My list</h2>

		<ul class="my-list__list list">
			<li class="my-list__item list__item" v-for="(item, index) in myList" :key="index">
				<item :item="item" />
			</li>
		</ul>
		
	</section>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import item from '@/components/app-content/item'


export default {
	name: 'myList',
	components: {
		item
	},
	props: {
		
	},
	data: () => ({

	}),
	computed: {
		...mapState(['myList']),
	},
	methods: {
		...mapActions(['getMyList'])
	},
	created() {
		this.getMyList()
	},
	beforeDestroy() {
		// Clear filtered state in order to display default content in onther pages
		this.$store.state.filtered = []
	}
}
</script>