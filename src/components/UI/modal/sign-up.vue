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
						:class="{ error: $v.repeatPassword.$error }"
						@change="$v.repeatPassword.$touch()"
					>
				</div>
				<!-- /form__item -->

				<div class="form__submit">
					<button type="submit" class="button button--simple">Submit</button>
				</div>
				<!-- /form__submit -->
			</form>
		</div>

		<div slot=footer>Already have an account?</div>

	</modal>

</template>


<script>
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
					this.$emit('close')
					this.reset()
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
		methods: {
			onSubmit() {
				this.$v.$touch()
				if (!this.$v.$invalid) {
					const user = {
						name: this.name,
						email: this.email,
						password: this.password
					}
					console.log(user)

					// Done
					this.reset()
					this.$emit('close')
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