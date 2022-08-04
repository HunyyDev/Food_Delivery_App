import { StyleSheet } from "react-native";
import CUSTOM_COLOR from "../../../../constants/colors";
import CUSTOM_FONT from "../../../../constants/fonts";
import scale from "../../../../constants/responsive";
const styles = StyleSheet.create({
    informationTag: {
        marginTop: scale(12),
        width: '100%',
        height: scale(159),
        backgroundColor: CUSTOM_COLOR.White,
        borderRadius: scale(20),
        flexDirection: 'row',
    },
    imgContainer: {
        marginLeft: scale(16),
        marginTop: scale(20),
    },
    text: {
        color: CUSTOM_COLOR.Black,
    },
    tag: {
        marginLeft: scale(30),
        marginTop: scale(25),
        marginRight: scale(53),
    },
})
export default styles;