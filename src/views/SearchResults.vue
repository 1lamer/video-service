<template>

	<section class="search-results">

		<h2 class="search-results__title title">Search results</h2>

		<ul class="search-results__list list">
			<item v-for="(item, index) in searchResults" :key="index" :item="item"/>
		</ul>

		<messageOfAbsence v-show="!searchResults.length">
			It was nothing found ¯\_(ツ)_/¯
		</messageOfAbsence>
	</section>

</template>


<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import item from '@/components/app-content/item'
import messageOfAbsence from '@/components/UI/message-of-absence/message-of-absence'
export default {
	name: 'SearchResults',
	components: {
		item,
		messageOfAbsence
	},
	computed: {
		...mapState(['searchResults']),
	},
	beforeDestroy() {
		// Clear filtered state in order to display default content in onther pages
		this.$store.state.filtered = []
	}
}
</script>
