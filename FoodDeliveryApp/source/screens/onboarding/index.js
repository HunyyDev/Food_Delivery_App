import React, {Component } from "react";
import {Text, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity,TouchableHighlight, Image, ScrollView} from 'react-native';
import CUSTOM_COLOR from "../../constant/color";
import CUSTOM_FONT from "../../constant/font";
import scale from "../../constant/reponsive";
import { IMG_Logo, IMG_background } from "../../Image";
import LoginScreen from "../auth/login";
export class Onboarding extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <SafeAreaView style = {styles.container}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} style = {styles.scrollView}>
                    <View>
                        <>{/* Logo */}</>
                        <View style = {styles.logoContainer}>
                            <Image source = {IMG_Logo} style = {styles.logo}></Image>
                        </View>
                        <>{/* Title */}</>
                        <Text style = {styles.Text}>{'Food for \nEveryone'}</Text>
                        <>{/* Background */}</>
                        <View style = {styles.backGroundContainer}>
                            <Image source = {IMG_background} style={styles.backGround}/>
                        </View>
                        <>{/* Button */}</>
                        <TouchableOpacity style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>{'Get started '}</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.SunsetOrange,
    },

    logoContainer: {
        backgroundColor: 'white',
        width : scale(73),
        height: scale(73),
        borderRadius: scale(73)/2, 
        marginLeft: scale(49),
        marginTop: scale(56),
    },

    logo: {
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    Text: {
        color: 'white',
        fontFamily: CUSTOM_FONT.SF_PRO_ROUNDED_BOLD,
        fontSize: scale(65),
        fontWeight: '800',
        marginLeft: scale(51),
        position: 'absolute',
        marginTop: scale(160),
    },

    backGroundContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: scale(364),
        position: 'absolute',

    },

    backGround: {
        resizeMode: 'cover',
    },
    scrollView: {
        backgroundColor : 'pink',
    },

    buttonContainer: {
        width: scale(314),
        height: scale(70),
        backgroundColor: "white",
        borderRadius: 30,
        position: 'absolute',
        marginTop: scale(790),
        marginLeft: scale(51),
        justifyContent: 'center',
        alignSelf: 'center',
        
    },

    buttonText: {
        color: CUSTOM_COLOR.SunsetOrange,
        fontFamily: CUSTOM_FONT.SF_PRO_ROUNDED,
        fontSize: scale(17),
        fontWeight: '600',
        justifyContent: 'center',
        alignSelf: 'center',
    }
});

export default Onboarding;