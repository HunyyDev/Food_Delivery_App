import React, {Component } from "react";
import {Text, View, TouchableOpacity} from 'react-native';
import scale from "../../../constant/reponsive";
import { styles } from "./style";
import { CustomInput } from "../../../Components/customInput";
export class LoginForm extends Component{
    constructor(props){
      super(props);
      this.state = {};
    }
    render() {
      return ( 
        /* Here render the login input section */
        <>
        <View style={styles.lower}>
          {/* Email address */}
          <CustomInput label={'E-mail address'} />
          <View style={{ height: scale(46) }} />
          {/* Password */}
          <CustomInput label={'Password'} />
          {/* Forget password link(still in progress) */}
          <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')} style={{marginTop: scale(34), marginRight: 'auto'}}>
            <Text style={styles.text}> {'Forget passcode?'}</Text>
          </TouchableOpacity>
        </View>
        {/* Button */}
        <TouchableOpacity onPress={() => this.props.navigation.navigate('HomeScreen')} style= {styles.button}>
          <Text style={styles.buttonText}>{'Login'}</Text>
        </TouchableOpacity></>
      );
    }
};
  
