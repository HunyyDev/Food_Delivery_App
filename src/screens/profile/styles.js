import { StyleSheet } from "react-native";
import CUSTOM_COLOR from "../../constants/colors";
import CUSTOM_FONT from "../../constants/fonts";
import scale from "../../constants/responsive";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: CUSTOM_COLOR.Whisper,
    },
    workSpace: {
        marginTop: scale(66),
        marginLeft: scale(50),
        marginRight: scale(57),
    },
    headerText: {
        fontFamily: CUSTOM_FONT.AbelRegular,
        fontSize: scale(34),
        lineHeight: scale(43.33),
        color: CUSTOM_COLOR.Black,
        marginTop: scale(46),
    },
    detailText: {
        flex: 1,
        fontFamily: CUSTOM_FONT.AbelRegular,
        fontSize: scale(18),
        lineHeight: scale(22.94),
        color: CUSTOM_COLOR.Black,
        marginTop: scale(42),
    },
    headerTab: {
        flexDirection: 'row',
        alignContent: 'space-around',
    },
    changeButton: {
        fontFamily: CUSTOM_FONT.AbelRegular,
        fontSize: scale(15),
        lineHeight: scale(19.22),
        color: CUSTOM_COLOR.SunsetOrange,
        flex: 1,
        marginTop: scale(42),
        marginRight: scale(12),
    },
    tagContainer: {
        height: scale(197),
    },
    button: {
        backgroundColor: CUSTOM_COLOR.White,
        borderRadius: scale(20),
        marginTop: scale(27),
        height: scale(60),
        flexDirection: 'row',
        alignContent: 'space-around',
    },
    buttonText: {
        fontFamily: CUSTOM_FONT.AbelRegular,
        fontSize: scale(18),
        lineHeight: scale(22.94),
        marginLeft: scale(23),
        flex: 1,
        textAlignVertical: 'center',
        color: CUSTOM_COLOR.Black,
    },
    buttonPic: {
        marginRight: scale(36),
        alignSelf: 'center',
    }
})

export default styles;