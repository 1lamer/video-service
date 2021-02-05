<template>
	<transition name="modal-fade" mode="out-in">
		<slot></slot>
	</transition>
</template>

<script>
	export default {

	}
</script>

<style lang="scss">

	.modal-fade-enter-active, .modal-fade-leave-active {
		transition: opacity .3s ease;
	}
	.modal-fade-enter, .modal-fade-leave-to {
		opacity: 0;
	}

	// .modal-fade-enter {
	//   opacity: 0
	// }
	// .modal-fade-leave-active {
	//   opacity: 0
	// }
	// .modal-fade-enter .modal-fade-content,
	// .modal-fade-leave-active .modal-fade-content {
	//   transform: scale(1.2)
	// }
</style>
