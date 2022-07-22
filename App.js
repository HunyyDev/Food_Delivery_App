import LoginScreen from './src/screens/auth/login';
import { Onboarding } from './src/screens/onboarding';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import { InProgress } from './src/screens/inProgress';
const Stack = createNativeStackNavigator();

const App = props => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShow: false }}>
          {isSignedIn ? (
            <>
              <Stack.Screen name="HomeScreen" options={{ headerShown: false }}>
                {props => <HomeScreen {...props} />}
              </Stack.Screen>
            </>
          ) : (
            <>
              <Stack.Screen name="Onboarding" options={{ headerShown: false }}>
                {props => <Onboarding {...props} />}
              </Stack.Screen>
              <Stack.Screen name="Login" options={{ headerShown: false }}>
                {props => <LoginScreen {...props} setAuth={setIsSignedIn}/>}
              </Stack.Screen>
            </>
          )}
          
          <Stack.Screen
            name="InProgress"
            component={InProgress}
            option={{ headerShow: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
