/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import React from 'react';
import { name as appName } from './app.json';
import AuthProvider from './src/contexts/AuthContext';
import CartProvider from './src/contexts/CartContext';
import UserInfoProvider from './src/contexts/UserInfoContext';
import Test from './testingcode';

const Wrap = () => {
  return (
    <CartProvider>
      <AuthProvider>
        <UserInfoProvider>
          <App />
        </UserInfoProvider>
      </AuthProvider>
    </CartProvider>
  );
};

AppRegistry.registerComponent(appName, () => Wrap);
