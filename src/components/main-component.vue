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

			<v-snackbar
				v-model="snackbar"
				:timeout="2000"
				:content-class="'text-center'" 
				:color="'rgba(51,51,51,0.9)'"
			>
				{{message}}
			</v-snackbar>

			<contentInfo v-if="Object.keys(contentInfo).length" :content="contentInfo"/>
			
		</div>
		<!-- /container -->
	</div>
	<!-- /wrapper -->
</template>


<script>
	import {mapGetters, mapMutations, mapState} from 'vuex'
	import Header from '@/components/header/header'
	import Nav from '@/components/nav/nav'
	import Footer from '@/components/footer/footer'
	import fouteFade from '@/components/animations/route-fade'
	import contentInfo from '@/components/app-content/content-info'

	export default {
		name: 'App',
		components: {
			Header,
			Footer,
			Nav,
			fouteFade,
			contentInfo
		},
		data: () => ({
			snackbar: false
		}),
		computed: {
			...mapState(['contentInfo']),
			...mapGetters(['message', 'isShow']),
			isActive() {
				return this.isShow
			}
		},
		watch: {
			// When v-snackbar returns snackbar=false, we will set isShow as false
			snackbar() {
				this.changeIsShow(this.snackbar)
			},
			isActive() {
				this.snackbar = this.isShow
			}
		},
		methods: {
			...mapMutations(['changeIsShow'])
		},
	}
</script>
