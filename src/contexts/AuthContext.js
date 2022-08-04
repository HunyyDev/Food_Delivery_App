import {onAuthStateChanged} from 'firebase/auth/react-native';
import React, {useEffect, useState} from 'react';
import {auth} from '../firebase-config';

export const AuthContext = React.createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currUser => {
      setUser(currUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
