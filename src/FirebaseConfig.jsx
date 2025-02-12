
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASAL1pnfg_BwMis2w0ru7xyQvNBuqRmew",
  authDomain: "lms-assignment-c1b21.firebaseapp.com",
  projectId: "lms-assignment-c1b21",
  storageBucket: "lms-assignment-c1b21.firebasestorage.app",
  messagingSenderId: "949660814967",
  appId: "1:949660814967:web:44adf11281c43a6a1e8072"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { auth ,db} 