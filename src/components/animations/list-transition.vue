<template>
	<transition-group name="list-transition" :tag="tag">
		<slot></slot>
	</transition-group>
</template>


<script>
	
	export default {
		props: {
			tag: {
				type: String,
				default: 'ul'
			},
			// classes: {
			// 	type: Array
			// }
		}
	}
</script>

<style lang="scss">
	.list-transition-enter-active, .list-transition-leave-active, .list-transition-move {
	  transition: all .2s;
	}
	.list-transition-enter, .list-transition-leave-to {
	  opacity: 0;
	  transform: translateY(100px);
	}
</style>


