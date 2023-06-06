import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB6NzCmIh6Zr1yF8Zh9Q-kqdpjKiRj0al8",
  authDomain: "notes-app-b2c1b.firebaseapp.com",
  projectId: "notes-app-b2c1b",
  storageBucket: "notes-app-b2c1b.appspot.com",
  messagingSenderId: "816775869263",
  appId: "1:816775869263:web:785e55aac62acb34a8cb3a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")
