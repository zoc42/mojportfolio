import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDQ2ZaWVbKZTFDkBYaShKHAaFlY4sqy09o",
    authDomain: "myportfolio-ef653.firebaseapp.com",
    projectId: "myportfolio-ef653",
    storageBucket: "myportfolio-ef653.appspot.com",
    messagingSenderId: "951346682028",
    appId: "1:951346682028:web:14412ebed88860ad2ee709"
  
});

var db = firebaseApp.firestore();

export { db };