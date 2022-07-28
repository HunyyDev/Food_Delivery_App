
import { StyleSheet } from "react-native";
import scale from "../../../constants/responsive";
import CUSTOM_COLOR from "../../../constants/colors";

const styles = StyleSheet.create({

    informationTag: {
        marginTop: scale(12),
        width: '100%',
        height: '100%',
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
        marginLeft: scale(15),
        marginTop: scale(20),
        marginRight: scale(28),
    },
})

export default styles;