// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdb7fymlYc8ovCk_hjgpcD_3TZjPdq85M",
  authDomain: "toy-marketplace-client-s-fa9ff.firebaseapp.com",
  projectId: "toy-marketplace-client-s-fa9ff",
  storageBucket: "toy-marketplace-client-s-fa9ff.appspot.com",
  messagingSenderId: "761229587367",
  appId: "1:761229587367:web:552392b16162c1a2773c82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;