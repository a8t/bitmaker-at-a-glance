import firebase from 'firebase'

// Initialize Firebase
const config = {
    apiKey: "AIzaSyDX3ZsGAnmwKPkAmY0CCNtA5QntgMYy6Sk",
    authDomain: "bitmaker-at-a.firebaseapp.com",
    databaseURL: "https://bitmaker-at-a.firebaseio.com",
    projectId: "bitmaker-at-a",
    storageBucket: "bitmaker-at-a.appspot.com",
    messagingSenderId: "83688056503"
};

firebase.initializeApp(config);

export default firebase; 