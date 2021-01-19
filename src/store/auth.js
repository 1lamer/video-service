import firebase from "firebase/app"

export default {
	actions: {

		async signUp({commit}, {email, password}) {
			try {
				const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
				console.log(user)
			} catch(e) {
				console.log(e)
			}
		},

		async signIn({commit}, {email, password}) {
			try {
				const user = await firebase.auth().signInWithEmailAndPassword(email, password)
				console.log(user)
			} catch(e) {
				console.log(e)
			}
		}

	}
}