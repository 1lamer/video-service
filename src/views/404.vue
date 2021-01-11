<template>
	<section class="notFound">

		<h2 class="notFound__title title">PAGE NOT FOUND!</h2>

		<p class="notFound__message">
			Get back to
			<router-link class="link" to="/">home page</router-link>
		</p>
				
	</section>
</template>


<style lang="scss" scoped>

.notFound {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	min-height: 80vh;

	text-align: center;

	&__title {
		font-size: 26px;
	}

	&__message {
		font-size: 20px;
	}

	.link {
		text-decoration: underline;
	}
}

</style>