<template>

	<section class="search-results">

		<h2 class="search-results__title title">Search results</h2>

		<!-- <ul class="search-results__list list"> -->
			<listTransition :tag="'ul'" :class="['search-results__list', 'list']">
				<item v-for="(item, index) in searchResults" :key="index" :item="item"/>
			</listTransition>
		<!-- </ul> -->

		<messageOfAbsence v-show="!searchResults.length">
			It was nothing found <br> ¯\_(ツ)_/¯
		</messageOfAbsence>
	</section>

</template>


<script>
import {mapState} from 'vuex'
import item from '@/components/app-content/item'
import messageOfAbsence from '@/components/UI/message-of-absence/message-of-absence'
import listTransition from '@/components/animations/list-transition'

export default {
	name: 'SearchResults',
	components: {
		item,
		messageOfAbsence,
		listTransition
	},
	computed: {
		...mapState(['searchResults']),
	},
}
</script>
