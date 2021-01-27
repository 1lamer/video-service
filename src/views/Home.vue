<template>
	<section class="home">

		<trending :trending="trending"/>

		<myList v-if="isAuthotized"/>
		
	</section>
</template>

<script>
import trending from '@/components/app-content/trending'
import myList from '@/components/app-content/my-list'
import { mapState, mapActions } from 'vuex'

export default {
	name: 'Home',
	components: {
		trending,
		myList
	},
	data: () => ({
		user: ''
	}),
	computed: {
		...mapState(['trending', 'auth']),

		isAuthotized() {
			return this.auth.user !== ''
		}
	},
	methods: {
		...mapActions(['getTrending'])
	},
	async created() {
		try {
			await this.getTrending()
		} catch(e) { console.log(e) }
	}
}
</script>
