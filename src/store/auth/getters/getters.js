export default {
	errorMessage(state) {
		const code = state.errorCode
		return state.errorMessages[code] || 'Something went wrong'
	},
	errorCode(state) {
		return state.errorCode
	},
	message(state) {
		return state.message
	},
	isShow(state) {
		return state.isShow
	}
}
