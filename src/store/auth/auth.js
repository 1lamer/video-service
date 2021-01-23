import mutations from '@/store/auth/mutations/mutations'
import getters from '@/store/auth/getters/getters'
import actions from '@/store/auth/actions/actions'

export default {
	state: {
		errorCode: '',
		errorMessages: {
			'auth/user-not-found': 'Wrong email',
			'auth/wrong-password': 'Wrong password',
			'auth/email-already-in-use': 'This email address is already being used'
		},
		message: '',
		isShow: false
	},
	mutations,
	actions,
	getters
}
