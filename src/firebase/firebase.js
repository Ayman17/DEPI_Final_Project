import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
apiKey: "AIzaSyDk24l_SjAIkOZ5mvenA2IrVKj5D6O3dPI",
  authDomain: "letterboxd-clone-d5493.firebaseapp.com",
  projectId: "letterboxd-clone-d5493",
  storageBucket: "letterboxd-clone-d5493.appspot.com",
  messagingSenderId: "50487504307",
  appId: "1:50487504307:web:7e56cdf4ea3aaf7099efc6",
  measurementId: "G-RZ8533CLK3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export default app;
export { db, auth };
