import React, { Component } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
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
        this.state.password
      )
    } catch (error) {
      console.log(error.message)
    }
  }
  handleSignUpClick = () => {
    console.log(this.state)
    console.log(this.props)
    /*
    this feature is on developing, basic idea is check if all input is valid then store in database, otherwise, alert error
    */
    if (this.state.password == this.state.confirmPasswords)
      this.Register();
  }

  render() {
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
