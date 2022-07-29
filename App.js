import LoginScreen from './src/screens/auth/login';
import {Onboarding} from './src/screens/onboarding';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {InProgress} from './src/screens/inProgress';
import Loading from './src/screens/loading';
import MyDrawer from './src/screens/drawer';


const Stack = createStackNavigator();
const App = props => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Onboarding">
            {props => <Onboarding {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Login">
            {props => <LoginScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="HomeScreen" component={MyDrawer} />
          <Stack.Screen
            name="InProgress"
            component={InProgress}
            option={{headerShow: false}}
          />
          <Stack.Screen
            name="Loading"
            component={Loading}
            option={{headerShow: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
