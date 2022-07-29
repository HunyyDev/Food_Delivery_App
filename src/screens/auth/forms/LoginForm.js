import React, {  useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import scale from "../../../constants/responsive";
import { styles } from "./styles";
import { CustomInput } from "../../../components/CustomInput";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../firebase-config";
import { sendPasswordResetEmail } from "firebase/auth/react-native";


export const LoginForm = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkValidate = () => {
    try {
      if (email == '') {
        throw ({ code: 'empty-email' })
      }
      else if (password == '') {
        throw ({ code: 'empty-password' })
      }
<<<<<<< src/screens/auth/forms/LoginForm.js
    }
    catch (error) {
=======
      await signInWithEmailAndPassword(auth, email, password);
      console.log('set isloading to false');
      setIsLoading(false);
      props.navigation.replace('HomeScreen')

    } catch (error) {
      console.log(error.code)
>>>>>>> src/screens/auth/forms/LoginForm.js
      switch (error.code) {
        case "empty-email":
          Alert.alert('Email can not be empty')
          break;
        case "empty-password":
          Alert.alert('Password can not be empty')
          break;
        default:
          break;
      }
      return false;
    }
    return true;
  }
  const handleSubmitForm = async () => {
    try {

      await signInWithEmailAndPassword(auth, email, password);
      props.navigation.replace('HomeScreen')

    } catch (error) {
      console.log(error.code)
      switch (error.code) {
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
      props.navigation.goBack();
    }
  }


  const handleForgetPasswordClick = async () => {
    try {
      await sendPasswordResetEmail(auth, email)
      Alert.alert('Reset password email sent to ' + email, 'Please check your email')
    } catch (error) {
      switch (error.code) {
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
    props.navigation.goBack();
  };


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
              if (email == '') {
                Alert.alert('Please fill email address above');
              }
              else {
                handleForgetPasswordClick();
                props.navigation.navigate('Loading')
              }
            }}
            style={{ marginTop: scale(34), marginRight: 'auto' }}>
            <Text style={styles.text}> {'Forget passcode?'}</Text>
          </TouchableOpacity>
        </View>
        {/* Button */}
        <TouchableOpacity onPress={
          () => {
            if (checkValidate()) {
              handleSubmitForm();
              props.navigation.navigate('Loading')
            }
          }}
          style={styles.button}>
          <Text style={styles.buttonText}>{'Login'}</Text>
        </TouchableOpacity>
      </ScrollView></>
  );
};

