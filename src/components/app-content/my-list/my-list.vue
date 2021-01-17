<template>
	<section class="my-list">

		<h2 class="my-list__title title">My list</h2>

		<ul class="my-list__list list">
			<item v-for="(item, index) in myList" :key="index" :item="item" />
		</ul>

		<messageOfAbsence v-show="!myList.length">
			It was nothing added to list (；ω；)
		</messageOfAbsence>
		
	</section>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import item from '@/components/app-content/item'
import messageOfAbsence from '@/components/UI/message-of-absence'

export default {
	name: 'myList',
	components: {
		item,
		messageOfAbsence
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
		// this.$store.state.filtered = []
	}
}
</script>