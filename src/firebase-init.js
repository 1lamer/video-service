import firebase from "firebase/app"

const firebaseInit = {
	firebaseConfig: {
		apiKey: "AIzaSyCbeWugk61zuDovfcRX10BEwYIdRqTRb9s",
		authDomain: "upwork-profile.firebaseapp.com",
		databaseURL: "https://upwork-profile-default-rtdb.firebaseio.com",
		projectId: "upwork-profile",
		storageBucket: "upwork-profile.appspot.com",
		messagingSenderId: "163198862286",
		appId: "1:163198862286:web:765047448cbc6cd33a219f"
	},
	async authState() {
		try {
			await firebase.auth().onAuthStateChanged((user) => {
				if (user) {
					this.$store.commit('user', user.uid)
				} else {
					this.$store.commit('user', '')
				}
			})
		} catch (e) {
			console.log(e)
		}
	},
}

export default firebaseInit
