<template>
	<p class="messageOfAbsence">
		<slot></slot>
	</p>
</template>

<script>
export default {
	name: 'messageOfAbsense',
	components: {
	},
	computed: {
	},
	methods: {
	},
}
</script>

<style lang="scss">
	.messageOfAbsence {
		display: flex;
		justify-content: center;
		align-items: center;

		height: 70vh;

		font-size: 30px;
		text-align: center;
	}
</style>
