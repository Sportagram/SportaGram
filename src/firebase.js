// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBpVtuD4XJkO-TSye6UtzKF94GI3moUucA",
    authDomain: "nweeter-myproject.firebaseapp.com",
    projectId: "nweeter-myproject",
    storageBucket: "nweeter-myproject.appspot.com",
    messagingSenderId: "110396027319",
    appId: "1:110396027319:web:e956ce0d309a01f2777832",
    measurementId: "G-QSD2S05CZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { analytics, auth };