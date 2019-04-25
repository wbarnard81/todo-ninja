import firebase from 'firebase/app';
import 'firebase/firestore';

var config = {
  apiKey: 'AIzaSyD93_c-VnNJoqKRdi0icIlLXBNIwIbrRNM',
  authDomain: 'todo-ninja-9ba00.firebaseapp.com',
  databaseURL: 'https://todo-ninja-9ba00.firebaseio.com',
  projectId: 'todo-ninja-9ba00',
  storageBucket: 'todo-ninja-9ba00.appspot.com',
  messagingSenderId: '283494627380',
};
firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
