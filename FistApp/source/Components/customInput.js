import React, {Component } from "react";
import {Text, StyleSheet, TextInput} from 'react-native';
export class CustomInput extends Component{
    constructor(props){
        super(props);
        this.state = { 
            label: props.label,
            value: props.label
        };
    }
    setValue = (text) =>{
      this.state.value = text
    }
    render() {
        console.log('this.state', this.state);
        return(
        <>
            <Text style = {styles.inputLabel}>{this.state.label}</Text>
            <TextInput
            style={styles.inputContainer}
            onChangeText={text => {
                this.setValue(text);
            }}
            placeholder ='Type here'
            value = {Text}
            />
        </>
        );
    }
};

const styles = StyleSheet.create({
    inputContainer: {
        height: 40,
        color: 'black',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
  
    inputLabel: {
    color: 'black',
    },
})