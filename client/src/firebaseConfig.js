// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


//Authentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";

//Cloud Firestore & Storage
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ-gUYs2m-6nMGctYd5hvgptUeXDdEYm4",
  authDomain: "blog-d6ed8.firebaseapp.com",
  projectId: "blog-d6ed8",
  storageBucket: "blog-d6ed8.appspot.com",
  messagingSenderId: "594203680971",
  appId: "1:594203680971:web:c3c544ad2ab6f10f90bb4e",
  measurementId: "G-NMDEVQ2WKE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





export const storage = getStorage(app);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
