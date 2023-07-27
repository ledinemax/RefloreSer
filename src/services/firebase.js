// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAez8QtRsFMhnLjdyKD_jLFQWzr5LaVvUY",
    authDomain: "refloreser-4d3c3.firebaseapp.com",
    projectId: "refloreser-4d3c3",
    storageBucket: "refloreser-4d3c3.appspot.com",
    messagingSenderId: "916575307109",
    appId: "1:916575307109:web:3ac2ca3af64305d7228d8c",
    databaseURL: "https://refloreser-4d3c3-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const database = getDatabase();

export default database
