<template>
	<transition name="route-fade" mode="out-in">
		<slot></slot>
	</transition>
</template>


<style lang="scss">

	.route-fade-enter-active, .route-fade-leave-active {
		transition: opacity .2s ease;
	}
	.route-fade-enter, .route-fade-leave-to {
		opacity: 0;
	}

</style>

