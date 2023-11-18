import firebase from "firebase";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCb_f8BAI9QwfoPaJGaxeIMZLPuPNAkYkk",
    authDomain: "unichat-63192.firebaseapp.com",
    projectId: "unichat-63192",
    storageBucket: "unichat-63192.appspot.com",
    messagingSenderId: "902404929097",
    appId: "1:902404929097:web:a102b322ef16663fb77198"
  }).auth();