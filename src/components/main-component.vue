<template>
	<div class="wrapper">
		<div class="container">

			<Header />

			<div class="main">

				<Nav />

				<div id="app-content">
					
					<fouteFade>
						<router-view/>
					</fouteFade>
					
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
	import snackbar from '@/components/UI/snackbar/snackbar'
	import fouteFade from '@/components/animations/route-fade'

	export default {
		name: 'App',
		components: {
			Header,
			Footer,
			Nav,
			snackbar,
			fouteFade
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
