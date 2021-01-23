export default {
	install(Vue, options) {
		Vue.prototype.$message = function(text) {
			console.log(text)
		}

		Vue.prototype.$error = function(text) {
			console.log(`[Error]: ${text}`)
		}
	}
}
