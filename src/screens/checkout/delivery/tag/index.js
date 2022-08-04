import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import CUSTOM_COLOR from "../../../../constants/colors";
import CUSTOM_FONT from "../../../../constants/fonts";
import scale from "../../../../constants/responsive";
const Tag = props => {
    return(
        <View style={styles.informationTag}>
            <View style={styles.tag}>
                <View style = {{borderBottomColor: CUSTOM_COLOR.SilverChalice, borderBottomWidth: scale(0.5)}}><Text
                    style={[
                    styles.text,
                    {
                        fontFamily: CUSTOM_FONT.AbelRegular,
                        fontSize: scale(17),
                        paddingBottom: scale(9),
                    },
                    ]}>
                    {props.user.name}
                </Text></View>
                <Text
                    style={[
                    styles.text,
                    {
                        flex: 1,
                        fontFamily: CUSTOM_FONT.AbelRegular,
                        fontSize: scale(13),
                        lineHeight: scale(15.51),
                        marginTop: scale(9),
                        borderBottomColor: CUSTOM_COLOR.SilverChalice,
                        borderBottomWidth: scale(0.5),
                    },
                    ]}>
                    {props.user.address}
                </Text>
                <Text
                    style={[
                    styles.text,
                    {
                        flex: 1,
                        fontFamily: CUSTOM_FONT.AbelRegular,
                        fontSize: scale(15),
                        lineHeight: scale(21.48),
                        marginTop: scale(9)
                    },
                    ]}>
                    {props.user.phoneNum}
                </Text>
            </View>
        </View>
    )
}
export default Tag;