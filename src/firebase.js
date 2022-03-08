// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
//when you want to use firebase in your app, you need to import it if below code is not working.
import firebase from "firebase/app";
// import * as firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
	apiKey: "",
	authDomain: "",
	projectId: "",
	storageBucket:"",
	messagingSenderId: "",
	appId: "",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
