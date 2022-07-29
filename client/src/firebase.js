import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDv5fAaxYkI_uxpWPNZw-90p2oMxO5Ousk",
    authDomain: "clone-7a90b.firebaseapp.com",
    projectId: "clone-7a90b",
    storageBucket: "clone-7a90b.appspot.com",
    messagingSenderId: "173007256660",
    appId: "1:173007256660:web:2420cf294ac9a5422781c1",
    measurementId: "G-ZVEDCTPWG4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;