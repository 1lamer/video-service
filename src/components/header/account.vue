<template>
	<div class="header__account">
		<button
			type="button"
			class="header__button header__button--notAuthorized button button--rect"
			@click="signIn = true"
			v-show="!isAuthotized"
		>
			<span>Sign in</span>
		</button>

		<button
			type="button"
			class="header__button header__button--authorized button button--rect"
			@focus="isDropDown = true"
			@mouseover="isDropDown = true"
			@mouseleave="isDropDown = false"
			v-show="isAuthotized"
		>
			<svg class="header__icon" width="20" height="20" >
				<use xlink:href="@/assets/img/sprite.svg#user"></use>
			</svg>

			<dropDown v-if="isDropDown" @click="action" />
			
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
import {mapMutations, mapActions, mapState} from 'vuex'
import signIn from '@/components/UI/modal/sign-in'
import signUp from '@/components/UI/modal/sign-up'
import dropDown from '@/components/UI/drop-down/drop-down'

export default {
	components: {
		signIn,
		signUp,
		dropDown
	},
	data: () => ({
		signIn: false,
		signUp: false,
		isDropDown: false,
		replace() {
			this.signUp = !this.signUp
			this.signIn = !this.signIn
		},
		authorized: false
	}),
	computed: {
		...mapState(['auth']),

		isAuthotized() {
			return this.auth.user !== ''
		}
	},
	methods: {
		...mapMutations(['setMessage', 'changeIsShow']),
		...mapActions(['signOut', 'getUid']),

		async action(data) {
			this.isDropDown = false

			if (data === 'signout') {
				this.authorized = false
				try {
					await this.signOut()

					this.setMessage('You have signed out')
					this.changeIsShow(true)
				}
				catch(e) { console.log(e) }
			}
		},
	},
}
</script>
