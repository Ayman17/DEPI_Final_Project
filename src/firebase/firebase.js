// Import Firebase modules
import { initializeApp } from 'firebase/app';
import { getFirestore, setLogLevel, enableNetwork, disableNetwork, doc, getDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk24l_SjAIkOZ5mvenA2IrVKj5D6O3dPI",
  authDomain: "letterboxd-clone-d5493.firebaseapp.com",
  projectId: "letterboxd-clone-d5493",
  storageBucket: "letterboxd-clone-d5493.appspot.com",
  messagingSenderId: "50487504307",
  appId: "1:50487504307:web:7e56cdf4ea3aaf7099efc6",
  measurementId: "G-RZ8533CLK3"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = getFirestore(app);
const auth = getAuth();

// Set Firestore log level to debug (optional, for troubleshooting)
setLogLevel('debug');

// Disable offline persistence entirely by not enabling it

// Optional: Handle online/offline state changes and Firestore network control
window.addEventListener('online', () => {
  console.log("Back online, enabling Firestore network.");
  enableNetwork(db).then(() => console.log("Firestore network enabled."));
});

window.addEventListener('offline', () => {
  console.log("Currently offline, Firestore network disabled.");
  disableNetwork(db).then(() => console.log("Firestore network disabled."));
});

// Function to check network status before making Firestore requests
export const isOnline = () => {
  return window.navigator.onLine;
}

// Example of how you can use this check in your Firestore queries
export const fetchData = async (docRef) => {
  if (isOnline()) {
    try {
      const docSnapshot = await getDoc(docRef);  // Now 'getDoc' is defined and imported
      if (docSnapshot.exists()) {
        return docSnapshot.data();
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  } else {
    console.log("Client is offline, skipping Firestore request.");
  }
}

// Export initialized Firebase modules
export default app;
export { db, auth };
