import LoginScreen from './src/screens/auth/login';
import { Onboarding } from './src/screens/onboarding';
import React, { Component, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
import { InProgress } from './src/screens/inProgress';
=======
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import {InProgress} from './src/screens/inProgress';
>>>>>>> 554cb1ceeebd4a8aff60f867a0cd0fb9c06916f0
import History from './src/screens/history';
import Orders from './src/screens/orders';
import Loading from './src/screens/Loading';
import { AuthContext } from './src/contexts/AuthContext';
<<<<<<< HEAD
import { createStackNavigator } from '@react-navigation/stack';
import MyDrawer from './src/screens/drawer';
import CustomScrollDrawer from './src/screens/drawer';
=======
>>>>>>> 554cb1ceeebd4a8aff60f867a0cd0fb9c06916f0

const Stack = createNativeStackNavigator();

const App = props => {
  const user = useContext(AuthContext);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
<<<<<<< HEAD
          {console.log(user)}

          {user ? (<>
            <Stack.Screen name='MyDrawer' component={MyDrawer} />
          </>) : (<>
            <Stack.Screen name="Onboarding">
              {props => <Onboarding {...props} />}
            </Stack.Screen>
            <Stack.Screen name='MyDrawer' component={MyDrawer} />
          </>
          )}
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="History">
            {props => <History {...props} />}
          </Stack.Screen>
=======

          {user ? (
            <>
              <Stack.Screen name="HomeScreen">
                {props => <HomeScreen {...props} />}
              </Stack.Screen>

            </>
          ) : (
            <>
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
            {props => <HomeScreen {...props} />}
          </Stack.Screen> */}

>>>>>>> 554cb1ceeebd4a8aff60f867a0cd0fb9c06916f0
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
