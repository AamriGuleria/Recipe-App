import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyBkEv9vUNOVWOJ6rePrzjYxo9-qXV6xbRc",
    databaseURL: "https://recipeapp-732bb-default-rtdb.firebaseio.com/",
    authDomain: "recipeapp-732bb.firebaseapp.com",
    projectId: "recipeapp-732bb",
    storageBucket: "recipeapp-732bb.appspot.com",
    messagingSenderId: "128464055385",
    appId: "1:128464055385:web:6b7a66f784436034455548",
    measurementId: "G-HLRYRLL428"
  };


  const app = initializeApp(firebaseConfig); //  Used to set up Firebase
  const auth = getAuth(app); // Handle user authentication
  const database = getDatabase(app);//Firebase's real-time database
  
  export { auth, database };