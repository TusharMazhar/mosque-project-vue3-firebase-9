import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDRQWqoJ-Hi1Ua7iVzbJbly2_JwOg01WOk",
  authDomain: "hazratshahjalal-c6300.firebaseapp.com",
  projectId: "hazratshahjalal-c6300",
  storageBucket: "hazratshahjalal-c6300.appspot.com",
  messagingSenderId: "1032707672220",
  appId: "1:1032707672220:web:77e87186493cf908838559"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {
    db
}