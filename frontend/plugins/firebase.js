import firebase from "firebase";

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyBCsypVyHWf2wZU2-wF-iJ4H0HzOa9GeI0",
        authDomain: "share-e74aa.firebaseapp.com",
        projectId: "share-e74aa",
        storageBucket: "share-e74aa.appspot.com",
        messagingSenderId: "914341291871",
        appId: "1:914341291871:web:aebea7d2fae087d6e2b8ea",
        measurementId: "G-NB9P7NZVTM"
    });
}

export default firebase;