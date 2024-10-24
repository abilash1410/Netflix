// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7jIRctxlcOGzVK7V2eeBBZR_hIkKAlhM",
  authDomain: "fcmpush-ca779.firebaseapp.com",
  databaseURL: "https://fcmpush-ca779.firebaseio.com",
  projectId: "fcmpush-ca779",
  storageBucket: "fcmpush-ca779.appspot.com",
  messagingSenderId: "530597261802",
  appId: "1:530597261802:web:085eba4be9af6d9972c293"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
