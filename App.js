import LoginScreen from './src/screens/auth/login';
import {Onboarding} from './src/screens/onboarding';
import React, { useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {InProgress} from './src/screens/inProgress';
import History from './src/screens/history';
import Loading from './src/screens/Loading';
import { AuthContext } from './src/contexts/AuthContext';
import {createStackNavigator} from '@react-navigation/stack';
import MyDrawer from './src/screens/drawer';

const Stack = createStackNavigator();
const App = props => {
  const  user  = useContext(AuthContext);
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
          <Stack.Screen name="History">
            {props => <History {...props} />}
          </Stack.Screen>
          <Stack.Screen name = 'MyDrawer' component={MyDrawer}/>
          <Stack.Screen
            name="InProgress"
            component={InProgress}
          />
          <Stack.Screen
            name="Loading"
            component={Loading}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};



export default App;
