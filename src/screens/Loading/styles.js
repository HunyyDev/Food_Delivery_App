import React from "react"
import { StyleSheet } from "react-native"
import CUSTOM_COLOR from "../../constants/colors"
import CUSTOM_FONT from "../../constants/fonts";
import scale from "../../constants/responsive";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.SunsetOrange,
    },
    circle: {
        width: scale(262),
        height: scale(262),
        borderRadius: scale(262/2),
        backgroundColor: CUSTOM_COLOR.White,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    backGround: {
        flex: 1,
        justifyContent: 'center',
    },
    logo: {
        flex: 1,
        alignSelf:'center',
        justifyContent:'center',
    },
    title: {
        color: CUSTOM_COLOR.SunsetOrange,
        fontFamily: CUSTOM_FONT.Regular,
        fontSize: scale(10),
        alignSelf: 'center',
        top: scale(160),
        position: 'absolute',
    },
    ellipse: {
        backgroundColor: 'transparent',
        width: scale(27),
        height: scale(27),
        borderRadius: scale(27)/2,
        borderWidth: scale(1.5),
        borderColor: CUSTOM_COLOR.SunsetOrange,
        position:'absolute',
        bottom: scale(40),
        alignSelf: 'center',
        justifyContent: 'center',
    },
    vector: {
        backgroundColor: 'transparent',
        width: scale(27),
        height: scale(27),
        borderRadius: scale(27)/2,
        borderWidth: scale(3),
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: CUSTOM_COLOR.White,
        alignSelf: 'center',
    },
})

export default styles;