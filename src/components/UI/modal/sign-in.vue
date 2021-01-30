<template>
		<modal 
			title="Sign in"
			@close="exit()"
			@replace="$emit('replace')"
			@message="message = $event"
			:message="message"
		>
			<div slot="body">

				<form class="form" @submit.prevent="onSubmit">

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

					<div class="form__submit">
						<button type="submit" class="button button--simple">Submit</button>
					</div>
					<!-- /form__submit -->
				</form>
			</div>

			<div slot=footer>Haven't created an account?</div>

		</modal>
</template>


<script>
	import {mapGetters, mapMutations, mapActions} from 'vuex'
	import { required, minLength, email } from 'vuelidate/lib/validators'
	import modal from '@/components/UI/modal/modal.vue'
	
	export default {
		components: {
			modal
		},
		data() {
			return {
				password: '',
				email: '',
				exit() {
					this.reset()
					this.$emit('close')
				},
			}
		},
		validations: {
			email: {
				required,
				email
			},
			password: {
				required,
				minLength: minLength(6)
			},
		},
		computed: {
			...mapGetters(['errorMessage', 'errorCode', 'message'])
		},
		methods: {
			...mapMutations(['clearErrorCode', 'setMessage', 'changeIsShow']),
			...mapActions(['signIn']),

			async onSubmit() {
				this.$v.$touch()
				if (!this.$v.$invalid) {
					const user = {
						email: this.email,
						password: this.password
					}

					try {
						await this.signIn(user)
					} catch(e) { console.log(e) }
					
					// Done
					if (this.errorCode === '') {
						this.exit()
						this.$emit('authorized')

						// Displaying message to user about successful sign in
						this.setMessage('You have signed in')
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
				this.email = ''
				this.password = ''
				this.$v.$reset()
			}
		},
	}
</script>



<style lang="scss">

.form {
	margin-bottom: 30px;

	&__item {

		&.errorInput {
			.form__error-text { display: block; }
		}
	}

	&__label {
		display: block;

		font-size: 16px;
		text-align: center;

	}

	&__error-text {
		display: none;
		margin-bottom: 8px;
		font-size: 13.4px;
		color: $danger-color;
	}

	&__input {
		width: 100%;
		padding: 16px 26px;
		margin-bottom: 30px;

		border: 1px solid $border-base;
		border-radius: 20px;

		font-family: 'Rubik';

		&.error { border-color: $danger-color; }
	}

	&__submit {
		text-align: center;
	}
}
</style>
