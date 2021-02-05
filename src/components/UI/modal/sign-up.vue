<template>
	<modal 
		title="Sign up"
		@close="exit()"
		@replace="$emit('replace')"
	>
		<div slot="body">

			<form class="form" @submit.prevent="onSubmit">

				<div class="form__item" :class="{ errorInput: $v.name.$error }">

					<label class="form__label">Name:</label>

					<p class="form__error-text" v-show="!$v.name.required">
						Field is required!
					</p>

					<p class="form__error-text" v-show="!$v.name.minLength">
						Name must have at least {{ $v.name.$params.minLength.min }}!
					</p>

					<input class="form__input"
						v-model.trim="name" 
						:class="{ error: $v.name.$error }"
						@change="$v.name.$touch()"
					>
				</div>
				<!-- /form__item -->

				<div class="form__item" :class="{ errorInput: $v.email.$error }">

					<label class="form__label">Email:</label>

					<p class="form__error-text" v-show="!$v.email.required">
						Field is required!
					</p>

					<p class="form__error-text" v-show="!$v.email.email">
						Field should look like adress@mail.domain
					</p>

					<input class="form__input"
						v-model.trim="email"
						:class="{ error: $v.email.$error }"
						@change="$v.email.$touch()"
					>
				</div>
				<!-- /form__item -->
				
				<div class="form__item" :class="{ errorInput: $v.password.$error }">

					<label class="form__label">Password:</label>

					<p class="form__error-text" v-show="!$v.password.required">Field is required!</p>

					<p class="form__error-text" v-show="!$v.password.minLength">
						Name must have at least {{ $v.password.$params.minLength.min }}!
					</p>

					<input class="form__input"
						v-model.trim="password"
						type="password" 
						:class="{ error: $v.password.$error }"
						@change="$v.password.$touch()"
					>
				</div>
				<!-- /form__item -->

				<div class="form__item" :class="{ errorInput: $v.repeatPassword.$error }">

					<label class="form__label">Repeat password:</label>

					<p class="form__error-text" v-show="!$v.password.sameAsPassword">
						Passwords must coinside
					</p>

					<input class="form__input"
						v-model.trim="repeatPassword"
						type="password" 
						:class="{ error: $v.repeatPassword.$error }"
						@change="$v.repeatPassword.$touch()"
					>
				</div>
				<!-- /form__item -->

				<div class="form__submit">
					<button type="submit" class="button button--simple">Sign up</button>
				</div>
				<!-- /form__submit -->
			</form>
		</div>

		<div slot=footer>Already have an account?</div>

	</modal>

</template>


<script>
	import {mapGetters, mapMutations, mapActions} from 'vuex'
	import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'

	import modal from '@/components/UI/modal/modal.vue'
	
	export default {
		components: {
			modal
		},
		data() {
			return {
				name: '',
				password: '',
				repeatPassword: '',
				email: '',
				exit() {
					this.reset()
					this.$emit('close')
				}
			}
		},
		validations: {
			name: {
				required,
				minLength: minLength(4)
			},
			email: {
				required,
				email
			},
			password: {
				required,
				minLength: minLength(6)
			},
			repeatPassword: {
				required,
				sameAsPassword: sameAs('password')
			}
		},
		computed: {
			...mapGetters(['errorMessage', 'errorCode', 'message'])
		},
		methods: {
			...mapMutations(['clearErrorCode', 'setMessage', 'changeIsShow']),
			...mapActions(['signUp']),

			async onSubmit() {
				this.$v.$touch()
				if (!this.$v.$invalid) {
					const user = {
						name: this.name,
						email: this.email,
						password: this.password
					}

					try	{
						await this.signUp(user)
					} catch(e) { console.log(e) }

					// Done
					if (this.errorCode === '') {
						this.reset()
						this.$emit('replace')

						// Displaying message to user about successful sign up
						this.setMessage('You have signed up')
						this.changeIsShow(true)
					} else {
						// Displaying message to user about mistake
						this.setMessage(this.errorMessage)
						this.changeIsShow(true)
						this.clearErrorCode()
					}
				}
			},
			reset() {
				this.name = ''
				this.email = ''
				this.password = ''
				this.repeatPassword = ''
				this.$v.$reset()
			}
		},
	}
</script>



<style lang="scss">

</style>
