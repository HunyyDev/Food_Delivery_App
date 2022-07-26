import { StyleSheet } from "react-native";
import CUSTOM_COLOR from "../../constants/colors";
import CUSTOM_FONT from "../../constants/fonts";
import scale from "../../constants/responsive";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: CUSTOM_COLOR.SunsetOrange,
    },
  
    logoContainer: {
      backgroundColor: CUSTOM_COLOR.White,
      width: scale(73),
      height: scale(73),
      borderRadius: scale(73) / 2,
      marginLeft: scale(49),
      marginTop: scale(56),
    },
  
    logo: {
      resizeMode: 'contain',
      justifyContent: 'center',
      alignSelf: 'center',
    },
  
    Text: {
      color: CUSTOM_COLOR.White,
      fontFamily: CUSTOM_FONT.Bold,
      fontSize: scale(65),
      marginLeft: scale(51),
      marginTop: scale(31),
    },
  
    backgroundContainer: {
      flex: 1,
      alignContent: 'center',
      justifyContent: 'center',
      marginTop: scale(92),
    },
  
    background: {
      resizeMode: 'contain',
    },
    scrollView: {
      backgroundColor: 'pink',
    },
  
    buttonContainer: {
      width: scale(314),
      height: scale(70),
      backgroundColor: CUSTOM_COLOR.White,
      borderRadius: 30,
      position: 'absolute',
      marginLeft: scale(51),
      justifyContent: 'center',
      alignSelf: 'center',
      top: scale(790),
    },
  
    buttonText: {
      color: CUSTOM_COLOR.SunsetOrange,
      fontFamily: CUSTOM_FONT.Regular,
      fontSize: scale(17),
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });
export default styles;