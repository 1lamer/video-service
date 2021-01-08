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
			
		</div>
		<!-- /container -->
	</div>
	<!-- /wrapper -->
</template>


<script>

import Header from '@/components/header/header'
import Nav from '@/components/nav/nav'
import Footer from '@/components/footer/footer'

export default {
	name: 'App',
	components: {
		Header,
		Footer,
		Nav
	}
}
</script>