import firebase from "firebase";
// import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyA_uwMAkQxXZmdIZoBQygNbf3foGkZWW1I",
    authDomain: "realestate-acc50.firebaseapp.com",
    projectId: "realestate-acc50",
    storageBucket: "realestate-acc50.appspot.com",
    messagingSenderId: "11897222200",
    appId: "1:11897222200:web:7c668d9b9fee1cfd5462cd",
    measurementId: "G-MFC8PVB14G"
};

firebase.initializeApp(firebaseConfig)
var db = firebase.firestore();
var auth = firebase.auth();
var storage = firebase.storage();

// const usersCollection = db.collection('users');

export { db, auth, storage };