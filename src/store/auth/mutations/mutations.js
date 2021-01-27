export default {
	setMessage(state, message) {
		state.message = message
	},

	clearMessage(state) {
		state.message = ''
	},

	setErrorCode(state, code) {
		state.errorCode = code
	},

	clearErrorCode(state) {
		state.errorCode = ''
	},

	changeIsShow(state, payload) {
		state.isShow = payload
	},

	user(state, userId) {
		state.user = userId
	}
}
