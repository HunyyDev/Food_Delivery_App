import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyCFGFxzTSVUG-tb-NgjziBs4A9YRWpaQUY",
    authDomain: "food-for-everyone-e506f.firebaseapp.com",
    projectId: "food-for-everyone-e506f",
    storageBucket: "food-for-everyone-e506f.appspot.com",
    messagingSenderId: "869719383889",
    appId: "1:869719383889:web:6d83ffad7065e51d2dfd70",
    measurementId: "G-VHJXBB44JV"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
