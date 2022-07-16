/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import CUSTOM_COLOR from "./source/constant/color";
import Onboarding from "./source/screens/onboarding";
const App = () => {
  return (
    <View style={{backgroundColor:'#FF4B3A'}}>

      <Onboarding/>
    </View>

  )
}

export default App;
