import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { IMG_Pencil, IMG_Profile } from "../../../assets/images";
import CUSTOM_FONT from "../../../constants/fonts";
import scale from "../../../constants/responsive";
import CUSTOM_COLOR from "../../../constants/colors";
const Tag = props => {
    return(
        <View style={styles.informationTag}>
            <View style={styles.imgContainer}>
                <Image source={IMG_Profile} resizeMode={'contain'} />
            </View>
            <View style={styles.tag}>
                <Text
                    style={[
                    styles.text,
                    {
                        fontFamily: CUSTOM_FONT.AbelRegular,
                        fontSize: scale(18),
                        lineHeight: scale(21.48),
                    },
                    ]}>
                    {props.user.name}
                </Text>
                <Text
                    style={[
                    styles.text,
                    {
                        fontFamily: CUSTOM_FONT.AbelRegular,
                        fontSize: scale(13),
                        lineHeight: scale(15.51),
                        opacity: 0.5,
                        marginTop: scale(6),
                        borderBottomColor: CUSTOM_COLOR.Black,
                        borderBottomWidth: scale(0.5),
                        height: scale(25),
                    },
                    ]}>
                    {props.user.email}
                </Text>
                <Text
                    style={[
                    styles.text,
                    {
                        fontFamily: CUSTOM_FONT.AbelRegular,
                        fontSize: scale(15),
                        lineHeight: scale(21.48),
                        opacity: 0.5,
                        marginTop: scale(9),
                        borderBottomColor: CUSTOM_COLOR.Black,
                        borderBottomWidth: scale(0.5),
                        height: scale(25),
                    },
                    ]}>
                    {props.user.phoneNum}
                </Text>
                <Text
                    style={[
                    styles.text,
                    {
                        width: scale(191),
                        fontFamily: CUSTOM_FONT.Regular,
                        fontSize: scale(13),
                        lineHeight: scale(15.51),
                        opacity: 0.5,
                        marginTop: scale(9),
                    },
                    ]}>
                    {props.user.description}
                </Text>
            </View>
        </View>
    )
}
export default Tag;