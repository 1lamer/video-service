<template>
	<section class="home">

		<trending :trending="trending"/>

		<myList />

		
	</section>
</template>

<script>
import trending from '@/components/app-content/trending/trending'
import myList from '@/components/app-content/my-list/my-list'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Home',
	components: {
		trending,
		myList
	},
	data: () => ({

	}),
	computed: {
		...mapState(['trending'])
	},
	methods: {
		...mapActions(['getTrending'])
	},
	created() {
		this.getTrending()
	}
}
</script>
