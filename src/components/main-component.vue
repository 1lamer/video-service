<template>
	<div class="wrapper">
		<div class="container">

			<Header />

			<div class="main">

				<Nav />

				<div id="app-content">
					<router-view/>
				</div>
				<!-- /app-content -->
			</div>
			<!-- /main -->

			<Footer />

			<snackbar
				slot="snackbar"
				:isShow="isShow" 
				@isShow="changeIsShow($event)"
			>
        {{message}}
      </snackbar>
			
		</div>
		<!-- /container -->
	</div>
	<!-- /wrapper -->
</template>


<script>
	import {mapGetters, mapMutations} from 'vuex'
	import Header from '@/components/header/header'
	import Nav from '@/components/nav/nav'
	import Footer from '@/components/footer/footer'
	import snackbar from '@/components/UI/snackbar/snackbar.vue'

	export default {
		name: 'App',
		components: {
			Header,
			Footer,
			Nav,
			snackbar
		},
		data: () => ({
		}),
		computed: {
			...mapGetters(['message', 'isShow']),
		},
		methods: {
			...mapMutations(['changeIsShow'])
		}
	}
</script>
