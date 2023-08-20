const firebase = require('firebase');
const firebaseConfig = {
    apiKey: "AIzaSyA5gpDwvCiIcN-fhl3MOTsbVODfpAjntbQ",
    authDomain: "plated-hearth-333606.firebaseapp.com",
    projectId: "plated-hearth-333606",
    storageBucket: "plated-hearth-333606.appspot.com",
    messagingSenderId: "407170090656",
    appId: "1:407170090656:web:01f2bf0ae5119fa921ebc5",
    measurementId: "G-02BY18REJX"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const Users = db.collection("Users")
module.exports = Users;