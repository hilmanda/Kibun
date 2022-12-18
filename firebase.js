import firebase from "firebase/compat";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn925A49kkZJL4rx2ci6lk6pVX9A6TxHE",
  authDomain: "kibun-id.firebaseapp.com",
  projectId: "kibun-id",
  storageBucket: "kibun-id.appspot.com",
  messagingSenderId: "35131889448",
  appId: "1:35131889448:web:1c2fda63d64f9c4fc2e21d",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
