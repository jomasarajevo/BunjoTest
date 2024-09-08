// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
//import "firebase/compat/auth";
//import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGW2IvKhAGhWhIl7r-EOmNsW1qtNDlcpc",
  authDomain: "fir-bunjo-auth.firebaseapp.com",
  projectId: "fir-bunjo-auth",
  storageBucket: "fir-bunjo-auth.appspot.com",
  messagingSenderId: "296210865313",
  appId: "1:296210865313:web:59c0e9ca3ac9d4815864e0"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app();
}

//firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
export const auth = firebase.auth();
//const app = initializeApp(firebaseConfig);