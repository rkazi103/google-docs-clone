import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD8_2f1w1B5TidllYq2hl6OEi6wB5zJFZk",
  authDomain: "docs-clone-1931c.firebaseapp.com",
  projectId: "docs-clone-1931c",
  storageBucket: "docs-clone-1931c.appspot.com",
  messagingSenderId: "214910752912",
  appId: "1:214910752912:web:9b831c99a95e62567f2015",
  measurementId: "G-YHPQMZK0ZY",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export const db = app.firestore();
