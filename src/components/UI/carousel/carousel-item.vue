<template>
	<div class="carousel-item">
		<slot></slot>
	</div>
</template>

<script>

export default {
	name: 'carousel-item',
	components: {

	},
	props: {
		
	}
}
</script>

<style lang="scss">
	
	.carousel-item {
		min-width: 200px;
		margin-right: 20px;
	}

</style>