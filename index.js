/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import React, { useEffect, useState } from 'react';
import { name as appName } from './app.json';
import AuthProvider from './src/contexts/AuthContext';
import CartProvider from './src/contexts/CartContext';
import NetInfo from "@react-native-community/netinfo";
import NoInternet from './src/screens/NoInternet';


const Wrap = () => {
  const [connection, setConnection] = useState();
  NetInfo.fetch().then(state => {
    setConnection(state.isConnected)
  })
  
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnection(state.isConnected)
    }
    )

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <>
      {
        connection ?
          <>
            <CartProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </CartProvider >
          </>
          :
          <>
            <NoInternet />
          </>
      }
    </>
  );
};

AppRegistry.registerComponent(appName, () => Wrap);
