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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promp: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
