import AsyncStorage from '@react-native-async-storage/async-storage'
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence
} from 'firebase/auth/react-native';

import { initializeFirestore } from "firebase/firestore";

// add firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyCFGFxzTSVUG-tb-NgjziBs4A9YRWpaQUY",
  authDomain: "food-for-everyone-e506f.firebaseapp.com",
  projectId: "food-for-everyone-e506f",
  storageBucket: "food-for-everyone-e506f.appspot.com",
  messagingSenderId: "869719383889",
  appId: "1:869719383889:web:6d83ffad7065e51d2dfd70",
  measurementId: "G-VHJXBB44JV"
};

// initialize firebase app
const app = initializeApp(firebaseConfig);

// initialize auth
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

// initialize database
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export { db };