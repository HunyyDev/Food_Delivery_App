
import React, {Component } from "react";
import {Text, StyleSheet,_Text} from 'react-native';
import CUSTOM_COLOR from "../constant/color";
export class CustomInput extends Component{
    constructor(props){
        super(props);
        this.state = { 
            label: props.label,
            value: '',
            secureTextEntry: props.secureTextEntry | false,
        };
    }

    getChangeText = text =>{
        return (this.state.value.length < text.length)? this.state.value + text.charAt(text.length - 1): this.state.value.substring(0,this.state.value.length - 1);
    }
    render() {
        console.log('this.state', this.state);
        return(
        <>
            <Text style = {styles.inputLabel}>{this.state.label}</Text>
            <TextInput
            style={styles.inputContainer}
            onChangeText={text => {
                this.setState({value: this.getChangeText(text)});
                console.log('this.state', this.state);
            }}
            placeholder = {this.props.placeHolder}
            placeholderTextColor= {CUSTOM_COLOR.Whisper}
            value = {(this.props.secureTextEntry == 1)? this.props.secureTextEntryText.repeat(this.state.value.length):this.state.value}
            />
        </>
        );
    }
};

const styles = StyleSheet.create({
    inputContainer: {
        height: 40,
        color: CUSTOM_COLOR.Black,
        borderBottomColor: CUSTOM_COLOR.Black,
        borderBottomWidth: 1,
    },
  
    inputLabel: {
    color: CUSTOM_COLOR,
    opacity: 0.4,
    },
})
