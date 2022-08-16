import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});

  var dataSub;

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '869719383889-rdi0uidj7paukm39t7pe9vg0e1den71e.apps.googleusercontent.com',
    });

    const unsubscribe = auth().onAuthStateChanged(currUser => {
      if (dataSub && (!currUser || currUser.uid !== user.uid)) {
        dataSub();
      }
      if (currUser) {
        setUser(currUser);
        dataSub = onSnapshot(doc(db, 'UserInfo/' + currUser.uid), (doc) => {
          setUserData(doc.data());
        })
      }
    });

    return () => {
      unsubscribe();
      dataSub();
    };
    
  }, []);

  return <AuthContext.Provider value={{ user, userData }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
