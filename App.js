import LoginScreen from './src/screens/auth/login';
import { Onboarding } from './src/screens/onboarding';
import React, { Component, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import { InProgress } from './src/screens/inProgress';
import Loading from './src/screens/loading';

const Stack = createNativeStackNavigator();

const App = props => {
<<<<<<< HEAD
  const user = useContext(AuthContext);
=======
>>>>>>> d26f47ae8311b7f818622358fadb498d63f20367
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
<<<<<<< HEAD

          {user ? (
            <>
              {console.log(user)}
              <Stack.Screen name="HomeScreen">
                {props => <HomeScreen {...props} />}
              </Stack.Screen>

            </>
          ) : (
            <>
              {console.log(user)}
              <Stack.Screen name="Onboarding">
                {props => <Onboarding {...props} />}
              </Stack.Screen>
              <Stack.Screen name="Login">
                {props => <LoginScreen {...props} />}
              </Stack.Screen>
              <Stack.Screen name="HomeScreen">
                {props => <HomeScreen {...props} />}
              </Stack.Screen>
            </>)}


          {/* <Stack.Screen name="Onboarding">
            {props => <Onboarding {...props} />}
          </Stack.Screen> */}



          {/* <Stack.Screen name="HomeScreen">
=======
          <Stack.Screen name="Onboarding">
            {props => <Onboarding {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="HomeScreen">
>>>>>>> d26f47ae8311b7f818622358fadb498d63f20367
            {props => <HomeScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen
            name="InProgress"
            component={InProgress}
            option={{ headerShow: false }}
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
