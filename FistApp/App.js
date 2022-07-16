import LoginScreen from "./source/screens/auth/login"
import { Onboarding } from "./source/screens/onboarding";
import React from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {StyleSheet} from 'react-native';
import { InProgress } from "./source/screens/inProgress/inProgress";
const Stack = createNativeStackNavigator();

const App = props =>{
  return(
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShow: false}}>
          <Stack.Screen name =  "Onboarding" options={{headerShown: false}}>
            {props => <Onboarding {...props}/>}
          </Stack.Screen>
          <Stack.Screen name =  "Login" options={{headerShown: false}}>
            {props => <LoginScreen {...props}/>}
          </Stack.Screen>
          <Stack.Screen name = "HomeScreen" option ={{headerShown: false}}>
            {props => <HomeScreen {...props}/>}
          </Stack.Screen>
          <Stack.Screen name = 'inProgress' component={InProgress} option ={{headerShow: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
export default App;