import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import scale from '../../../constants/responsive';
import { styles } from './styles';
import { CustomInput } from '../../../components/CustomInput';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../../firebase-config';
export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*TextInput will be save in here whenever an CustomInput has been done writing
          After that, state will be save in a file name login_info.txt*/
      email: '',
      password: '',
      confirmPasswords: '',
    };
  }

  handleEmailChange = (text) => {
    this.setState({ email: text })
  }

  handlePasswordChange = (text) => {
    this.setState({ password: text })
  }

  handleConfirmPasswordChange = (text) => {
    this.setState({ confirmPasswords: text })
  }

  Register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        this.state.email,
        this.state.password,
      )
      Alert.alert('Sign up successfully')
      this.props.setLabel("Login");
    } catch (error) {
      console.log(error.code)
      switch (error.code) {
        case "auth/email-already-in-use":
          Alert.alert("Email already exist")
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

  handleSignUpClick = () => {
    if (this.state.email == '') {
      Alert.alert('Email can not be empty')
    }
    else if (this.state.password == '') {
      Alert.alert('Password can not be empty')
    }
    else if (this.state.password != this.state.confirmPasswords) {
      Alert.alert("Password and confirm password does not match")
    }
    else {
      this.Register();
    }
  }

  render() {
    console.log(this.props);
    return (
      /* Here render the Sign-Up input section */
      <>
        <ScrollView>
          <View style={styles.lower}>
            {/* Email address */}
            <CustomInput
              label={'E-mail address'}
              placeHolder={'E-mail'}
              onChangeInput={this.handleEmailChange} />
            <View style={{ height: scale(46) }} />
            {/* Password */}
            <CustomInput
              label={'Password'}
              placeHolder={'Password'}
              secureTextEntry={true}
              onChangeInput={this.handlePasswordChange}
            />
            <View style={{ height: scale(20) }} />
            {/* Confirm password */}
            <CustomInput
              label={' Confirm Password'}
              placeHolder={'Confirm Password'}
              secureTextEntry={true}
              onChangeInput={this.handleConfirmPasswordChange}
            />
          </View>
          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={this.handleSignUpClick}>
            <Text style={styles.buttonText}>{'Sign Up'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}
