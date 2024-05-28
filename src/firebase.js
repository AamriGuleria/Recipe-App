import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import 'firebase/database';
import { getFirestore, collection, addDoc} from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBkEv9vUNOVWOJ6rePrzjYxo9-qXV6xbRc",
    authDomain: "recipeapp-732bb.firebaseapp.com",
    projectId: "recipeapp-732bb",
    storageBucket: "recipeapp-732bb.appspot.com",
    messagingSenderId: "128464055385",
    appId: "1:128464055385:web:6b7a66f784436034455548",
    measurementId: "G-HLRYRLL428"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  export { auth, db , collection, addDoc};