import React from "react";
import { Component } from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
/*This component will be redirect from any function that still in progress or in stuck at that moment */
export class InProgress extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    render(){
        return(
            <SafeAreaView style={{flex: 1}}>
                <Text style={{color:'black', alignSelf:'center',fontSize:15}}>{'This function is still in progress \n       Please wait for update'}</Text>
            </SafeAreaView>
        );
    }
};