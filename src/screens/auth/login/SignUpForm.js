import React, {Component} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import scale from '../../../constants/responsive';
import {styles} from './styles';
import {CustomInput} from '../../../components/CustomInput';
export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*TextInput will be save in here whenever an CustomInput has been done writing
          After that, state will be save in a file name login_info.txt*/
      email: props.email,
      password: props.password,
      confirmPasswords: props.confirmPassWord,
    };
  }

  checkAuthentic(props) {
    /* return boolean variable if the email and password is correct/store in login_info.txt */
  }
  render() {
    return (
      /* Here render the Sign-Up input section */
      <>
        <ScrollView>
          <View style={styles.lower}>
            {/* Email address */}
            <CustomInput label={'E-mail address'} placeHolder={'E-mail'} />
            <View style={{height: scale(46)}} />
            {/* Password */}
            <CustomInput
              label={'Password'}
              placeHolder={'Password'}
              secureTextEntry={true}
            />
            <View style={{height: scale(20)}} />
            {/* Confirm password */}
            <CustomInput
              label={' Confirm Password'}
              placeHolder={'Confirm Password'}
              secureTextEntry={true}
            />
          </View>
          {/* Button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{'Sign Up'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    );
  }
}
