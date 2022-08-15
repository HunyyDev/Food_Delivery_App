import { onAuthStateChanged } from 'firebase/auth/react-native';
import { doc, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../firebase-config';
import auth from '@react-native-firebase/auth';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});

  var dataSub;

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(currUser => {
      console.log('trigger listener')
      console.log(currUser)
      if (dataSub && (!currUser || currUser.uid !== user.uid)) {
        dataSub();
      }
      if (currUser) {
        setUser(currUser);
        dataSub = onSnapshot(doc(db, 'UserInfo/' + currUser.uid), (doc) => {
          setUserData(doc.data());
        })
      }
    }, []);
    return () => {
      unsubscribe();
      dataSub();
    };
  }, []);

  return <AuthContext.Provider value={{ user, userData }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
