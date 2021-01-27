import firebase from "firebase/app"

export default {

	async signUp({dispatch, commit}, {email, password, name}) {
		try {
			const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
			const uid = await dispatch('getUid')
			
			// Adding a new user to realtime database
			firebase.database().ref(`users/${uid}`).set({
				name,
				myList: {}
			})
			console.log(user, uid)
		} catch(e) {
			// Setting an error to state.errorCode
			commit('setErrorCode', e.code)
		}
	},

	async signIn({dispatch, commit}, {email, password}) {
		try {
			const user = await firebase.auth().signInWithEmailAndPassword(email, password)
			const uid = await dispatch('getUid')
			commit('user', uid)
		} catch(e) {
			// Setting an error to state.errorCode
			commit('setErrorCode', e.code)
		}
	},

	async getUid({commit}) {
		const user = firebase.auth().currentUser
		return user ? user.uid : ''
	},

	async signOut({commit}) {
		try {
			await firebase.auth().signOut()
			commit('user', '')
		} catch(e) { console.log(e) }
	},
}
