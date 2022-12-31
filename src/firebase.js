import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
  apiKey: "AIzaSyAZXscrIs_Hn-yZ-NO2tcP8nl9oCf6VxkU",
  authDomain: "web-app-messenger-ca.firebaseapp.com",
  projectId: "web-app-messenger-ca",
  storageBucket: "web-app-messenger-ca.appspot.com",
  messagingSenderId: "116490488670",
  appId: "1:116490488670:web:f46cdf7b2381647c301dcf"
}).auth();