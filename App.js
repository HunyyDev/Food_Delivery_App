import LoginScreen from './src/screens/auth/login';
import {Onboarding} from './src/screens/onboarding';
import React, {Component, useContext, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import {InProgress} from './src/screens/inProgress';
import History from './src/screens/history';
import Orders from './src/screens/orders';

const Stack = createNativeStackNavigator();

const App = props => {
  const { user } = useContext(AuthContext);
  return (
    <>
      {console.log(user)}
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShow: false}}>
          <Stack.Screen name="Onboarding" options={{headerShown: false}}>
            {props => <Onboarding {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Login" options={{headerShown: false}}>
            {props => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="HomeScreen" options={{headerShown: false}}>
            {props => <HomeScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="History" options={{headerShown: false}}>
            {props => <History {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Orders" options={{headerShown: false}}>
            {props => <Orders {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="InProgress"
            component={InProgress}
            option={{headerShow: false}}
          />
          <Stack.Screen
            name="Loading"
            component={Loading}
            option={{ headerShow: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
