import React, {Component } from "react";
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import CUSTOM_COLOR from "../constants/colors";
import scale from "../constants/responsive";
import CUSTOM_FONT from "../constants/fonts";

export default class SwitchButton extends Component{
    constructor(props){
        super(props);
        this.state = {
          label: 'login',
        };
    }
    onPress = props => {
      this.setState({label: props.label});
      this.props.onPress(props.label);
    }
    render(){
        return(
            <>              
            {/* Button */}
            <View style = {styles.buttonContainer}>
              <View style = {{flex: 1}}>
                <TouchableOpacity onPress={() => this.onPress({label: 'login'})} style = {styles.button}>
                  <Text style={styles.buttonText}>{'Login'}</Text>
                </TouchableOpacity>
                {/* Line */}
                <View style={[styles.underline,{backgroundColor: (this.state.label=='login')? CUSTOM_COLOR.SunsetOrange:CUSTOM_COLOR.White}]}/>
              </View>
              <View style = {{flex: 1}}>
                <TouchableOpacity onPress={() => this.onPress({label: 'Sign-up'})} style = {styles.button}>
                  <Text style={styles.buttonText}>{'Sign-up'}</Text>
                </TouchableOpacity>
                {/* Line */}
                <View style={[styles.underline,{backgroundColor: (this.state.label=='login')? CUSTOM_COLOR.White:CUSTOM_COLOR.SunsetOrange}]}/>
              </View>
            </View></>
        );
    }
};

const styles = StyleSheet.create({
    underline: {
        backgroundColor: CUSTOM_COLOR.SunsetOrange,
        width: scale(134),
        height: 3,
        alignSelf: 'center',
      },
      buttonContainer: {
        height: 'auto',
        flexDirection:'row',
        bottom: 0,
        position: 'absolute',
        overflow: 'hidden',
      },
      button: {
        alignSelf: 'center',
        flex: 1,
        bottom: 10,
      },
  
      buttonText: {
        color: 'black',
        fontFamily: CUSTOM_FONT.Bold,
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 18,
      },
  
})
