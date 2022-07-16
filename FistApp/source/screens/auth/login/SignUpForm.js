import React, {Component } from "react";
import {Text, StyleSheet, View, SafeAreaView, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import scale from "../../../constant/reponsive";
import { styles } from "./style";
import { CustomInput } from "../../../Components/customInput";
export class SignUp extends Component{
    constructor(props){
      super(props);
      this.state = {
        /*TextInput will be save in here whenever an CustomInput has been done writing
          After that, state will be save in a file name login_info.txt*/
        email: props.email,
        password: props.password,
        confirmPasswords: props.confirmPassWord,
      };
    }

    checkAuthentic(props){
      /* return boolean variable if the email and password is correct/store in login_info.txt */
    }
    render() {
      return (
        /* Here render the Sign-Up input section */
        <><View style={styles.lower}>
          {/* Email address */}
          <CustomInput label={'E-mail address'} />
          <View style={{ height: scale(46) }} />
          {/* Password */}
          <CustomInput label={'Password'} />
          <View style={{ height: scale(20) }} />
          {/* Confirm password */}
          <CustomInput label={' Confirm Password'} />
        </View>
        {/* Button */}
        <TouchableOpacity  style={styles.button}>
          <Text style={styles.buttonText}>{'Sign Up'}</Text>
        </TouchableOpacity></>
      )
    }
};

