import React, {Component } from "react";
import {Text, StyleSheet, View, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import CUSTOM_COLOR from "../../../constant/color";
import CUSTOM_FONT from "../../../constant/font";
import scale from "../../../constant/reponsive";
import { IMG_bella, IMG_vector1} from "../../../Image";
import { LoginForm } from "./loginForm";
import { SignUp } from "./SignUpForm";

function Condition(state){
  if(state.label == 'login')
    return <LoginForm {...state.props}/>;
  else
    return <SignUp {...state.props}/>;
}

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state= {
          label: 'login',
          underlineLeft:scale(40),
        };
    }

    render() {
        // return JSX
        console.log('this.state', this.state);
    
        return (
          <SafeAreaView
            style={styles.container}
            onPressHandle={() => {
              this.getData();
            }}>

            <View style = {styles.upper}>
              {/*Logo*/}
              <View style ={styles.logoContainer}>
                <Image source = {IMG_bella} style = {styles.logo}/>
                <Image source ={IMG_vector1} style = {{position: 'absolute',marginLeft: scale(242),marginTop: scale(164.81)}}/>
              </View>
              {/* Button */}
              <View style = {styles.buttonContainer}>
                <TouchableOpacity onPress={() => this.setState({label: 'login',underlineLeft: scale(40)})} style = {styles.button}>
                <TouchableOpacity onPress={() => this.setState({label: 'login',underlineLeft: scale(40), })} style = {styles.button}>
                  <Text style={styles.buttonText}>{'Login'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.setState({label: 'SignUp',underlineLeft: scale(260)})} style = {styles.button}>
                  <Text style={styles.buttonText}>{'Sign-up'}</Text>
                </TouchableOpacity>
              </View>
              {/* Line */}
              <View style={[styles.underline,{marginLeft: this.state.underlineLeft}]}/>
            </View>
            <Condition {...{label: this.state.label, props: this.props}}></Condition>
          </SafeAreaView>
        );
      }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      borderRadius: 30,
    },

    upper: {
      justifyContent: 'center',
      alignContent: 'center',
      width: '100%',
      height: scale(382),
      elevation: 20,
      backgroundColor: 'white',
      borderRadius: 30,
      top: -20,
    },
    logoContainer: {
      justifyContent: 'center',
      alignContent: 'center',
    },
    logo: {
      width: scale(131.53),
      height: scale(162.38),
      justifyContent: 'center',
      alignSelf: 'center',
      resizeMode: 'cover',
    },
    underline: {
      backgroundColor: CUSTOM_COLOR.SunsetOrange,
      width: scale(134),
      height: 3,
      bottom: 0,
      position: 'absolute',
    },
    buttonContainer: {
      flexDirection:'row',
      bottom: 20,
      position: 'absolute',
    },
    button: {
      alignSelf: 'flex-end',
      flex: 1,
    },

    buttonText: {
      color: 'black',
      fontFamily: CUSTOM_FONT.SF_PRO_ROUNDED,
      fontWeight: 'bold',
      alignSelf: 'center',
      justifyContent: 'center',
      fontSize: 18,
    },

});