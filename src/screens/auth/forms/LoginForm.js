import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import scale from "../../../constants/responsive";
import { styles } from "./styles";
import { CustomInput } from "../../../components/CustomInput";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from "@react-native-google-signin/google-signin";

export const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onGoogleButtonPress = async () => {
    // Get the users ID token
    try {
      const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(idToken, null);

      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential);
      props.navigation.replace('MyDrawer');
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitForm = async () => {
    try {
      if (email == '') {
        throw {code: 'empty-email'};
      } else if (password == '') {
        throw {code: 'empty-password'};
      }
      else if (password == '') {
        throw ({ code: 'empty-password' })
      }
      await auth().signInWithEmailAndPassword(email, password);
      props.navigation.replace('MyDrawer');
    } catch (error) {
      console.log(error.code);
      switch (error.code) {
        case 'empty-email':
          Alert.alert('Email can not be empty');
          break;
        case 'empty-password':
          Alert.alert('Password can not be empty');
          break;
        case 'auth/user-not-found':
          Alert.alert('Email does not exist, please sign in ');
          break;
        case 'auth/invalid-email':
          Alert.alert('Invalid email');
          break;
        case 'auth/wrong-password':
          Alert.alert('wrong password');
          break;
        case 'auth/too-many-requests':
          Alert.alert('Too many request, try again later');
          break;
        default:
          break;
      }
      props.navigation.navigate('Login');
    }
  };

  const handleForgetPasswordClick = async () => {
    try {
      if (email == '') {
        throw {code: 'empty-email'};
      }
      await auth().sendPasswordResetEmail(email)
      Alert.alert('Reset password email sent to ' + email, 'Please check your email')
    } catch (error) {
      switch (error.code) {
        case 'empty-email':
          Alert.alert('Please fill email address above');
          break;
        case 'auth/user-not-found':
          Alert.alert('Email does not exist');
          break;
        case 'auth/invalid-email':
          Alert.alert('Invalid email');
          break;
        case 'auth/too-many-requests':
          Alert.alert('Too many request, try again later');
          break;
        default:
          break;
      }
    }
  };

  return (
    /* Here render the login input section */
    <>
      <ScrollView>
        <View style={styles.lower}>
          {/* Email address */}
          <CustomInput
            label={'E-mail address'}
            placeHolder={'E-mail'}
            onChangeInput={setEmail}
          />
          {/* Password */}
          <View style={{ height: scale(46) }} />
          <CustomInput label={'Password'} secureTextEntry={true} placeHolder={'Password'} onChangeInput={setPassword} />
          {/* Forget password link(still in progress) */}
          <TouchableOpacity
            onPress={handleForgetPasswordClick}
            style={{ marginTop: scale(34), marginRight: 'auto' }}>
            <Text style={styles.text}> {'Forget passcode?'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ marginRight: 'auto' }}
            onPress={onGoogleButtonPress}>
            <Text style={styles.text}> {'GG login'}</Text>
          </TouchableOpacity>
        </View>
        {/* Button */}
        <TouchableOpacity
          onPress={() => {
            handleSubmitForm();
            props.navigation.navigate('Loading');
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>{'Login'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};
