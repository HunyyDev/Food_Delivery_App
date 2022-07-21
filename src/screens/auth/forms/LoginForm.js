import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import scale from "../../../constants/responsive";
import { styles } from "./styles";
import { CustomInput } from "../../../components/CustomInput";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "../../../firebase-config";

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

  handleLoginClick = async () => {
    console.log(this.state)
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.password
      )
      console.log(user)
      this.props.setAuth(true);
    } catch (error) {
      console.log(error.code)
      switch (error.code) {
        case "auth/invalid-email":
          Alert.alert("Email does not exist, please sign in ")
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
            <TouchableOpacity onPress={() => this.props.navigation.navigate('InProgress')} style={{ marginTop: scale(34), marginRight: 'auto' }}>
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

