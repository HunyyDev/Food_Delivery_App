import LoginScreen from './src/screens/auth/login';
import { Onboarding } from './src/screens/onboarding';
import React, { Component, useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { InProgress } from './src/screens/inProgress';
import Loading from './src/screens/Loading';
import History from './src/screens/history';
import { AuthContext } from './src/contexts/AuthContext';
import MyDrawer from './src/screens/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = props => {
  const user = useContext(AuthContext).user;
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>          
          {(user == null || Object.keys(user).length === 0) ? (<>
            <Stack.Screen name="Onboarding">
              {props => <Onboarding {...props} />}
            </Stack.Screen>
            <Stack.Screen name='MyDrawer' component={MyDrawer} />
          </>) : (<>
            <Stack.Screen name='MyDrawer' component={MyDrawer} />
          </>
          )}
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="History">
            {props => <History {...props} />}
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
