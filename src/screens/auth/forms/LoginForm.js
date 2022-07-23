import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import scale from "../../../constants/responsive";
import { styles } from "./styles";
import { CustomInput } from "../../../components/CustomInput";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../firebase-config";
import { FirebaseError } from "firebase/app";
import { async } from "@firebase/util";
import { sendPasswordResetEmail } from "firebase/auth/react-native";

export class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleEmailChange = (text) => {
    this.setState({ email: text })
  }

  handlePasswordChange = (text) => {
    this.setState({ password: text })
  }

  Login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.password
      )
      this.props.setAuth(true);
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
    }
  }

  handleLoginClick = () => {
    if (this.state.email == '') {
      Alert.alert('Email can not be empty')
    }
    else if (this.state.password == '') {
      Alert.alert('Password can not be empty')
    }
    else {
      this.Login();
    }
  }

  forgotPassword = async () => {
    try {
      await sendPasswordResetEmail(
        auth,
        this.state.email,
        null
      )
      Alert.alert('Reset password email sent to ' + this.state.email, 'Please check your email')
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
  }

  handleForgetPasswordClick = () => {
    if (this.state.email == '') {
      Alert.alert('Please fill email address above');
    }
    else {
      this.forgotPassword()
    }
  }

  render() {
    return (
      /* Here render the login input section */
      <>
        <ScrollView>
          <View style={styles.lower}>
            {/* Email address */}
            <CustomInput label={'E-mail address'} placeHolder={'E-mail'} onChangeInput={this.handleEmailChange} />
            <View style={{ height: scale(46) }} />
            {/* Password */}
            <CustomInput label={'Password'} secureTextEntry={true} placeHolder={'Password'} onChangeInput={this.handlePasswordChange} />
            {/* Forget password link(still in progress) */}
            <TouchableOpacity onPress={this.handleForgetPasswordClick} style={{ marginTop: scale(34), marginRight: 'auto' }}>
              <Text style={styles.text}> {'Forget passcode?'}</Text>
            </TouchableOpacity>
          </View>
          {/* Button */}
          <TouchableOpacity onPress={this.handleLoginClick} style={styles.button}>
            <Text style={styles.buttonText}>{'Login'}</Text>
          </TouchableOpacity>
        </ScrollView></>
    );
  }
};
