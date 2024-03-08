import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAl-TYUZsGdECuBlrDR75nGLR4O5LI1r8c",
  authDomain: "disneytestapp-763b4.firebaseapp.com",
  projectId: "disneytestapp-763b4",
  storageBucket: "disneytestapp-763b4.appspot.com",
  messagingSenderId: "75393010959",
  appId: "1:75393010959:web:f25b46a5909e146aef827a",
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();

export default app;
