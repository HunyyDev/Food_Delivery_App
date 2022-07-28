import React, { Component, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import scale from "../../../constants/responsive";
import { styles } from "./styles";
import { CustomInput } from "../../../components/CustomInput";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../firebase-config";
import { FirebaseError } from "firebase/app";
import { async } from "@firebase/util";
import { sendPasswordResetEmail } from "firebase/auth/react-native";
import { AuthContext, UserAuth, AuthProvider } from "../../../contexts/AuthContext";
import { Auth } from "firebase/auth/react-native";
import HomeScreen from "../../home";
import Loading from "../../Loading";


export const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // handleEmailChange = (text) => {
  //   this.setState({ email: text })
  // }

  // handlePasswordChange = (text) => {
  //   this.setState({ password: text })
  // }

  const handleSubmitForm = async () => {
    try {
      if (email == '') {
        throw ({ code: 'empty-email' })
      }
      else if (password == '') {
        throw ({ code: 'empty-password' })
      }
      await signInWithEmailAndPassword(auth, email, password);
      console.log('set isloading to false');
      setIsLoading(false);
      props.navigation.navigate('HomeScreen')

    } catch (error) {
      console.log(error.code)
      switch (error.code) {
        case "empty-email":
          Alert.alert('Email can not be empty')
          break;
        case "empty-password":
          Alert.alert('Password can not be empty')
          break;
        case "auth/user-not-found":
          Alert.alert("Email does not exist, please sign in ")
          break;
        case "auth/invalid-email":
          Alert.alert("Invalid email")
          break;
        case "auth/wrong-password":
          Alert.alert("wrong password")
          break;
        case "auth/too-many-requests":
          Alert.alert("Too many request, try again later")
          break;
        default:
          break;
      }
    }
  }

  const handleForgetPasswordClick = async () => {
    try {
      if (email == '') {
        throw ({ code: "empty-email" })
      }
      await sendPasswordResetEmail(
        auth,
        this.state.email,
        null
      )

      Alert.alert('Reset password email sent to ' + this.state.email, 'Please check your email')
    } catch (error) {
      switch (error.code) {
        case "empty-email":
          Alert.alert('Please fill email address above');
          break;
        case "auth/user-not-found":
          Alert.alert("Email does not exist")
          break;
        case "auth/invalid-email":
          Alert.alert("Invalid email")
          break;
        case "auth/too-many-requests":
          Alert.alert("Too many request, try again later")
          break;
        default:
          break;
      }
    }
  };

  // useEffect(() => {
  //   console.log('effect')
  //   setEmail('');
  //   setPassword('');
  //   setIsLoading(true);
  // }, [])

  return (
    /* Here render the login input section */
    <>
      <ScrollView>
        <View style={styles.lower}>
          {/* Email address */}
          <CustomInput label={'E-mail address'} placeHolder={'E-mail'} onChangeInput={setEmail} />
          <View style={{ height: scale(46) }} />
          {/* Password */}
          <CustomInput label={'Password'} secureTextEntry={true} placeHolder={'Password'} onChangeInput={setPassword} />
          {/* Forget password link(still in progress) */}
          <TouchableOpacity onPress={
            () => {
              handleForgetPasswordClick();
            }}
            style={{ marginTop: scale(34), marginRight: 'auto' }}>
            <Text style={styles.text}> {'Forget passcode?'}</Text>
          </TouchableOpacity>
        </View>
        {/* Button */}
        <TouchableOpacity onPress={
          () => {
            handleSubmitForm();
            props.navigation.navigate('Loading')
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>{'Login'}</Text>
        </TouchableOpacity>
      </ScrollView></>
  );
};

