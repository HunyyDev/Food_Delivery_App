import { signOut } from 'firebase/auth/react-native';
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';
import CUSTOM_COLOR from '../../../constants/colors';
import CUSTOM_FONT from '../../../constants/fonts';
import scale from '../../../constants/responsive';
import auth from '@react-native-firebase/auth'

const SignOut = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e)
          }
          props.navigation.replace("Login");
        }}
        style={{
          backgroundColor: CUSTOM_COLOR.SunsetOrange,
          justifyContent: 'center',
          marginLeft: scale(50),
          marginRight: scale(50),
        }}>
        <Text
          style={{
            alignSelf: 'center',
            color: CUSTOM_COLOR.White,
            fontSize: scale(24),
            fontFamily: CUSTOM_FONT.Bold,
          }}>
          {'Sign-Out'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default SignOut;
