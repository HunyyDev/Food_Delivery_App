import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import CUSTOM_COLOR from '../../../constants/colors';
import CUSTOM_FONT from '../../../constants/fonts';
import scale from '../../../constants/responsive';

const SignOut = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity
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
