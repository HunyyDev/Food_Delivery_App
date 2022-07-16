import React, {Component } from "react";
import {Text, StyleSheet, View, SafeAreaView, TextInput, Button} from 'react-native';
import CUSTOM_COLOR from "../../../constant/color";

class CustomInput extends Component{
    constructor(props){
        super(props);
        this.state = { 
            label: props.label
        };
    }
    render() {
        console.log('this.state', this.state);
        return(
        <>
            <Text>{this.state.label}</Text>
            <TextInput
            style={styles.inputContainer}
            onChangeText={text => {
                this.setState(text);
            }}
            placeholder ='Type here'
            value={Text}
            />
        </>
        );
    }
};

export default class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.sate = {
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
            {/*Title*/}
            <Text style ={styles.Title}>
              {'Testing'}
            </Text>
            {/* Username */}
            <CustomInput
              label={'Username: '}
            />
    
            {/* Password */}
            <CustomInput 
              label = {'Password: '}
            />
            <Button title = {'Sign in'} style = {styles.Button}>

            </Button>
          </SafeAreaView>
        );
      }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    inputContainer: {
      backgroundColor: 'orange',
      height: 40,
    },
    Title: {
      alignSelf: 'center',
      fontSize: 100,
      fontWeight: 'bold',
      color: CUSTOM_COLOR.SunsetOrange
    },
    Button: {
      alignSelf: 'center',
      borderRadius: 60,
      width: 100,
      height: 50,
    }
});