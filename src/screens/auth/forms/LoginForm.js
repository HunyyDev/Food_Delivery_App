import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import scale from "../../../constants/responsive";
import { styles } from "./styles";
import { CustomInput } from "../../../components/CustomInput";
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

  handleLoginClick = () => {
    console.log(this.state)
    this.props.setAuth(true);
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

