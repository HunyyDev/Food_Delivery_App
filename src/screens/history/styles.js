import { StyleSheet } from "react-native";
import CUSTOM_COLOR from "../../constants/colors";
import CUSTOM_FONT from "../../constants/fonts";
import scale from "../../constants/responsive";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.WhiteSmoke,
  },
  backContainer: {
    width: scale(6),
    height: scale(12),
    top: scale(66),
    left: scale(50),
  },
  title: {
    fontFamily: CUSTOM_FONT.Bold,
    fontSize: scale(25),
    alignSelf: 'center',
    top: scale(40),
    color: CUSTOM_COLOR.Black,
  },
  button: {
    backgroundColor: CUSTOM_COLOR.Vermilion,
    width: scale(314),
    height: scale(70),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(30),
    bottom: scale(41),
    position: 'absolute',
  },
  buttonText:{
    fontFamily: CUSTOM_FONT.Regular,
    fontSize: scale(20),
    alignSelf: 'center',
    color: CUSTOM_COLOR.White,
  },
});
export default styles;