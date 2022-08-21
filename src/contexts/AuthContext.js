import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { db } from '../firebase-config';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({});
  var dataSub;
  var attachTodataSub = false;

  GoogleSignin.configure({
    webClientId: '869719383889-rdi0uidj7paukm39t7pe9vg0e1den71e.apps.googleusercontent.com',
  });

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(currUser => {
      if (dataSub && (!currUser || currUser.uid !== user.uid)) {
        dataSub();
      }
      setUser(currUser);
      if (currUser) {
        firestore()
          .collection('UserInfo')
          .doc(currUser._user.uid)
          .get()
          .then(doc => {
            if (doc._data == undefined) {
              firestore()
                .collection('UserInfo')
                .doc(currUser._user.uid)
                .set({
                  description: "",
                  email: currUser._user.email,
                  name: currUser._user.displayName,
                  paymentMethod: "Card",
                  phoneNum: currUser._user.phoneNum ? currUser._user.phoneNum : '',
                  phonePrefix: '+84',
                  photoURL: currUser._user.photoURL
                })
            }
          })

        attachTodataSub = true;
        dataSub = firestore()
          .collection('UserInfo')
          .doc(currUser._user.uid)
          .onSnapshot(doc => {
            setUserData(doc.data())
          })
      }
    });

    return () => {
      unsubscribe();
      if (attachTodataSub) dataSub();
    };

  }, []);

  return <AuthContext.Provider value={{ user, userData }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
