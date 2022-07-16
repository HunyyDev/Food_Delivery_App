import CUSTOM_COLOR from "../../../constant/color";
import CUSTOM_FONT from "../../../constant/font";
import { StyleSheet } from "react-native";
import scale from "../../../constant/reponsive";
export const styles = StyleSheet.create({
    lower: {
        marginLeft: scale(50),
        marginRight: scale(50),
        marginTop: scale(50),
        marginBottom: scale(50),
    },
    text: {
        //marginTop: scale(34),
        color: CUSTOM_COLOR.SunsetOrange,
        fontFamily: CUSTOM_FONT.SF_PRO_ROUNDED,
        fontWeight: '600',
        fontSize: scale(17),
    },
    button: {
        width: scale(314),
        height: scale(70),
        backgroundColor: CUSTOM_COLOR.SunsetOrange,
        borderRadius: 30,
        position: 'absolute',
        marginTop: scale(790),
        marginLeft: scale(51),
        justifyContent: 'center',
        alignSelf: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: CUSTOM_FONT.SF_PRO_ROUNDED,
        fontSize: scale(17),
        fontWeight: '600',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});