import { StyleSheet } from "react-native";
import CUSTOM_COLOR from "../../../constants/colors";
import CUSTOM_FONT from "../../../constants/fonts";
import scale from "../../../constants/responsive";
const styles = StyleSheet.create({
    buttonContainer: {
        top: scale(21),
        backgroundColor: CUSTOM_COLOR.White,
        borderRadius: scale(20),
        shadowOffset: 0.03,
        width: '100%',
        height: scale(231),
    },
    buttonStyle: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
    },
    shape: {
        width: scale(15),
        height: scale(15),
        borderRadius: scale(15)/2,
        borderWidth: 1,
        alignSelf: 'center',
        left: scale(21),
        justifyContent: 'center',
        alignItems: 'center',
    },
    inner: {
        width: scale(7),
        height: scale(7),
        borderRadius: scale(7)/2,
    },
    logoContainer: {
        left: scale(30),
        width: scale(40),
        height: scale(40),
        borderRadius: scale(10),
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: CUSTOM_COLOR.Black,
        alignSelf: 'center',
        position: 'absolute',
        fontSize: scale(17),
        lineHeight: scale(20.29),
        left: scale(102),
    }
})
export default styles;