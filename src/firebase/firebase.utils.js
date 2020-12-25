import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
	apiKey: 'AIzaSyDQbpKbGUsbdt-HsVrZDkhIZWzGR74nH78',
	authDomain: 'crwn-db-3d192.firebaseapp.com',
	projectId: 'crwn-db-3d192',
	storageBucket: 'crwn-db-3d192.appspot.com',
	messagingSenderId: '160052359689',
	appId: '1:160052359689:web:49546d732b29c4c5577ed8',
	measurementId: 'G-42NHWLN5KD',
};

//  Function that allows to take that userAuth object
//  that we got back from our Authentication library
//  and then store inside of our database.
// The additional data will be used when a user signs up
export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	// If the user with that id does not exist in out db
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('erro creating user', error.message);
		}
	}

	return userRef; // Returns id, path, parent
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
