// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLvDCfkm9dJpPtUCo-_zEmJy_b0wJa-I0",
  authDomain: "your-watch.firebaseapp.com",
  projectId: "your-watch",
  storageBucket: "your-watch.appspot.com",
  messagingSenderId: "984487255773",
  appId: "1:984487255773:web:b25cc3a5324c69ae4c8534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;