import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMYUG-w1ccHPVgTQxL6eRorb3UFfnDKGs",
  authDomain: "films-1211f.firebaseapp.com",
  projectId: "films-1211f",
  storageBucket: "films-1211f.appspot.com",
  messagingSenderId: "170001832524",
  appId: "1:170001832524:web:e58827b57bd26c9fdfb2e9",
  measurementId: "G-KWYNQJK989"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth();