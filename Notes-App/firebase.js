import { initializeApp } from 'firebase/app';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCzTp2YRLLiuvsWCvGbfhgLGO0dloAoke0',
  authDomain: 'notes-app-547b9.firebaseapp.com',
  projectId: 'notes-app-547b9',
  storageBucket: 'notes-app-547b9.appspot.com',
  messagingSenderId: '355388508514',
  appId: '1:355388508514:web:59c2720b0b1eb6defc043b',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, 'notes');
