import { initializeApp } from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBAjNr7OAoO4ro5fN2tbRv5IsrFt4e6j58",
  authDomain: "webtech-midterm63.firebaseapp.com",
  databaseURL: "https://webtech-midterm63.firebaseio.com",
  projectId: "webtech-midterm63",
  storageBucket: "webtech-midterm63.appspot.com",
  messagingSenderId: "684572922840",
  appId: "1:684572922840:web:923e7a3d660474028e98ad",
  measurementId: "G-WFKKQ8DWHG"
};

const app = initializeApp(firebaseConfig);

export const db = app.firestore();
export const departmentsCollection = db.collection("departments");
