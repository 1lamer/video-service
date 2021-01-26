export default {
	install(Vue, options) {
		Vue.prototype.$debounce = (fn, ms) => {
			let timeout
			return function(...args) {
				const fnCall = () => fn(...args)
				clearTimeout(timeout)
				timeout = setTimeout(fnCall, ms)
			}
		}
	}
}
