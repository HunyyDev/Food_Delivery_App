import { Component } from "react";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Image, View, Text, TextInput, ScrollView } from "react-native";
import { IMG_search, IMG_vector } from "../../assets/images";
import CUSTOM_COLOR from "../../constants/colors";
import scale from "../../constants/responsive";
import { IMG_cart } from "../../assets/images";
import CUSTOM_FONT from "../../constants/fonts";
import { CustomInput } from "../../Components/customInput";
import { IMG_Scroll1, IMG_Scroll2 } from "../../assets/images";
import { IMG_Tym, IMG_History, IMG_Home, IMG_user } from "../../assets/images";

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        return(
            <SafeAreaView style = {styles.container} edges = {['top', 'bottom']}>
                <></>
                {/* Logo1 */}
                <View style = {styles.vectorContainer}>
                    <Image source = {IMG_vector}/>
                </View>
                <></>
                {/* Logo2 */}
                <View style = {styles.cartContainer}>
                    <Image source = {IMG_cart} style={{opacity: 0.5}}/>
                </View>
                <></>
                {/* Title */}
                <View style = {styles.titleContainer}>
                    <Text style = {styles.title}>{'Delicious \nfood for you'}</Text>
                </View>
                <></>
                {/* Search Box */}
                <View style = {styles.searchContainer}>
                    <Image source = {IMG_search} style = {styles.searchImage}/>
                    <TextInput placeholder="Search" hitSlop={{top: '100%', bottom: '100%', left: '100%', right: '100%'}} placeholderTextColor={'black'} style={styles.searchInput} ></TextInput>
                </View>
                <></>
                {/* Type of food */}
                <View style = {styles.typeContainer}>
                    <ScrollView horizontal= {true} showsHorizontalScrollIndicator = {false}>
                        <Text style={styles.type}>
                            {'Foods'}
                        </Text>
                        <Text style={styles.type}>
                            {'Drinks'}
                        </Text>
                        <Text style={styles.type}>
                            {'Snacks'}
                        </Text>
                        <Text style={styles.type}>
                            {'Sauce'}
                        </Text>
                    </ScrollView>
                </View>
                <></>
                {/* Big ScrollView */}
                <View style = {styles.scrollContainer}>
                    <ScrollView horizontal= {true} showsHorizontalScrollIndicator = {false}>
                        <View style = {styles.option}>
                        </View>
                        <View style = {styles.option}>
                            <Image source={IMG_Scroll1} style = {styles.imageOption}/>
                            <Text style = {styles.optionText1}>
                                {'    Veggie \ntomato mix'}
                            </Text>
                            <Text style = {styles.optionText2}>
                                {'N1,900'}
                            </Text>
                        </View>
                        <View style = {styles.option}>
                                <Image source={IMG_Scroll2} style = {styles.imageOption}/>
                            <Text style = {styles.optionText1}>
                                {'Veggie \ntomato mix'}
                            </Text>
                            <Text style = {styles.optionText2}>
                                {'N1,900'}
                            </Text>
                        </View>
                    </ScrollView>
                </View>
                <></>
                {/* Tools */}
                <View style = {styles.homeContainer}>
                    <Image source = {IMG_Home}/>
                </View>
                <View style = {styles.tymContainer}>
                    <Image source = {IMG_Tym}/>
                </View>
                <View style = {styles.userContainer}>
                    <Image source = {IMG_user}/>
                </View>
                <View style = {styles.historyContainer}>
                    <Image source = {IMG_History} style={{opacity: 0.5}}/>
                </View>
            </SafeAreaView>
        );
    }
    
};
const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: CUSTOM_COLOR.WhiteSmoke,
    },
   vectorContainer: {
    width: scale(22),
    height: scale(14.67),
    top: scale(74),
    left: scale(54.60),
    position: 'absolute',
   },
   cartContainer: {
    width: scale(22),
    height: scale(15),
    top: scale(66),
    right: scale(42),
    position: 'absolute',
   },
   title: {
    color: 'black',
    fontFamily: CUSTOM_FONT.SF_PRO_ROUNDED_BOLD,
    fontSize: scale(34),
   },
   titleContainer: {
    width: scale(185),
    height: scale(93),
    top: scale(132),
    left: scale(50),
    position: 'absolute',
   },
   searchContainer: {
    width: scale(314),
    height: scale(60),
    top: scale(242),
    left: scale(50),
    borderRadius: scale(30),
    backgroundColor: CUSTOM_COLOR.Whisper,
    flexDirection:'row',
   },
   searchImage: {
    width: scale(18),
    height: scale(18),
    top: scale(21),
    left: scale(35),
   },
   searchInput: {
    top: scale(0),
    left: scale(50),
    opacity: 0.5,
    color: 'black',
   },
   typeContainer: {
    top: scale(300),

   },
   type: {
    top: scale(0),
    left: scale(50),
    opacity: 0.5,
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: CUSTOM_FONT.SF_PRO_ROUNDED_BOLD,
    fontSize: scale(17),
    fontWeight: '400',
    marginRight: scale(91),
   },
   scrollContainer: {
    backgroundColor: CUSTOM_COLOR.Whisper,
    top: scale(340),
   },
   option: {
    width: scale(220),
    height: scale(350),
    backgroundColor: 'white',
    marginRight: scale(29),
    borderRadius: scale(30),
   },
   optionText1: {
    alignSelf:'center',
    opacity: 0.5,
    color: 'black',
    fontFamily: CUSTOM_FONT.SF_PRO_ROUNDED_BOLD,
    fontSize: scale(22),
    fontWeight: '400',
   },
   optionText2: {
    alignSelf:'center',
    opacity: 0.5,
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: CUSTOM_FONT.SF_PRO_ROUNDED_BOLD,
    fontSize: scale(17),
    fontWeight: '400',
   },
   imageOption: {
    width: scale(220),
    height: scale(220),
    top: scale(0),
    left: scale(0),
    borderRadius:(220)
   },
   historyContainer: {
    width: scale(25.38),
    height: scale(21.75),
    bottom: scale(51.62),
    left: scale(370),
    position: 'absolute',
   },
   homeContainer: {
    width: scale(25.38),
    height: scale(21.75),
    bottom: scale(50.1),
    left: scale(53.12),
    position: 'absolute',
   },
   userContainer: {
    width: scale(25.38),
    height: scale(21.75),
    bottom: scale(53),
    left: scale(260),
    position: 'absolute',
   },
   tymContainer: {
    width: scale(25.38),
    height: scale(21.75),
    left: scale(160.55),
    bottom: scale(48),
    position: 'absolute',
   },
   });
   