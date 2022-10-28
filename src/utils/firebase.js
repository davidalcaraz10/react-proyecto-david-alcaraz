// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT0uGeLVE3pyEyTSOHD_5axPoqRKY3VZE",
  authDomain: "david-alcaraz-react.firebaseapp.com",
  projectId: "david-alcaraz-react",
  storageBucket: "david-alcaraz-react.appspot.com",
  messagingSenderId: "127622572251",
  appId: "1:127622572251:web:2f2a6384222232fcfdc4fe",
  measurementId: "G-0VQR1QEB29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const dataBase = getFirestore(app);