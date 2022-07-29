import { StyleSheet } from "react-native";
import CUSTOM_COLOR from "../../constants/colors";
import CUSTOM_FONT from "../../constants/fonts";
import scale from "../../constants/responsive";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.WhiteSmoke,
  },
  button: {
    backgroundColor: CUSTOM_COLOR.Vermilion,
    width: scale(314),
    height: scale(70),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(30),
    bottom: scale(263),
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