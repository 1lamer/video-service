<template>
	<div class="header__account">
		<button
			type="button"
			class="button button--rect"
			@click="signIn = !signIn"
		>
			<span v-if="!authorized">Sign in</span>

			<svg width="20" height="20" v-else>
				<use xlink:href="@/assets/img/sprite.svg#user"></use>
			</svg>

		</button>
		<signIn
			v-show="signIn"
			@replace="replace()"
			@close="signIn = false"
			@authorized="authorized = true"
		/>
		<signUp
			v-show="signUp"
			@replace="replace()"
			@close="signUp = false"
		/>
	</div>
	
</template>

<script>
import signIn from '@/components/UI/modal/sign-in'
import signUp from '@/components/UI/modal/sign-up'

export default {
	components: {
		signIn,
		signUp
	},
	data () {
		return {
			signIn: false,
			signUp: false,
			replace() {
				this.signUp = !this.signUp
				this.signIn = !this.signIn
			},
			authorized: false
		}
	},
}
</script>