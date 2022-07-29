import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import { IMG_Pencil, IMG_Profile } from "../../../assets/images";
import CUSTOM_FONT from "../../../constants/fonts";
import scale from "../../../constants/responsive";
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
                        fontFamily: CUSTOM_FONT.Bold,
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
                        fontFamily: CUSTOM_FONT.Regular,
                        fontSize: scale(13),
                        lineHeight: scale(15.51),
                        opacity: 0.5,
                        marginTop: scale(9),
                        marginBottom: scale(9),
                    },
                    ]}>
                    {props.user.email}
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
                    },
                    ]}>
                    {props.user.description}
                </Text>
                <TouchableOpacity
                    style={{
                    width: scale(17),
                    height: scale(17),
                    position: 'absolute',
                    right: scale(0),
                    }}
                    hitSlop={{top: 10, right: 10, left: 10, bottom: 10}}
                    onPress={() =>
                    setUser({
                        name: 'unknown',
                        email: 'unknown',
                        description: 'unknown',
                    })
                    }>
                    <Image source={IMG_Pencil} resizeMode={'contain'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Tag;