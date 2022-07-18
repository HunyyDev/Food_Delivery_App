import React from "react";
import {View,Text, StyleSheet, Component,TouchableOpacity } from "react";

export default class SwitchButton extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <>              
            {/* Button */}
            <View style = {styles.buttonContainer}>
              <TouchableOpacity onPress={() => this.setState({label: 'login',underlineLeft: scale(40), })} style = {styles.button}>
                <Text style={styles.buttonText}>{'Login'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.setState({label: 'SignUp',underlineLeft: scale(260)})} style = {styles.button}>
                <Text style={styles.buttonText}>{'Sign-up'}</Text>
              </TouchableOpacity>
            </View>
            {/* Line */}
            <View style={[styles.underline,{marginLeft: this.state.underlineLeft}]}/></>
        );
    }
};

const styles = StyleSheet.create({
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
  
})