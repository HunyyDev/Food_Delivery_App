import React from "react";
import { TouchableOpacity,View, Image, Text} from "react-native";

const ChooseButton = props =>{
    return(
        <TouchableOpacity style = {props.style} onPress={() => props.onPress()}>
            <View style = {props.shape}>
                <View style = {props.inner}/>
            </View>
            <View style = {props.logoContainer}><Image source = {props.source} style = {props.logo}/></View>
            <Text style ={props.titleStyle}>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default ChooseButton;