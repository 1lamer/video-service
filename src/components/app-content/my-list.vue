<template>
	<section class="my-list">

		<h2 class="my-list__title title">My list</h2>

			<!-- <ul class="my-list__list list"> -->
				<listTransition :tag="'ul'" :class="['my-list__list', 'list']">
					<item v-for="item in myList" :key="item.id" :item="item" />
				</listTransition>
			<!-- </ul> -->

		<messageOfAbsence v-show="!Object.keys(myList).length">
			It was nothing added to list <br> (；ω；)
		</messageOfAbsence>
		
	</section>
</template>

<script>
import {mapState, mapActions} from 'vuex'
import item from '@/components/app-content/item'
import messageOfAbsence from '@/components/UI/message-of-absence/message-of-absence'
import listTransition from '@/components/animations/list-transition'

export default {
	name: 'myList',
	components: {
		item,
		messageOfAbsence,
		listTransition
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
}
</script>
