import { StyleSheet } from "react-native";
import CUSTOM_COLOR from "../../../../constants/colors";
import scale from "../../../../constants/responsive";
import CUSTOM_FONT from "../../../../constants/fonts";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.Gallery,
  },
  backContainer: {
    width: scale(12),
    height: scale(12),
    left: scale(50),
    alignSelf: 'center'
  },
  searchBox: {
    width: '100%',
    height: scale(60),
    left: scale(130),
    borderRadius: scale(30),
    flexDirection: 'row',
    fontFamily: CUSTOM_FONT.AbelRegular,
    color: CUSTOM_COLOR.Black,
    fontSize: scale(17),
  },
  resultContainer: {
    flex : 1,
    backgroundColor: CUSTOM_COLOR.Alabaster ,
    marginTop: scale(30),
    borderRadius: scale(30),
  },
  option: {
    width: scale(170),
    height: scale(230),
    backgroundColor: CUSTOM_COLOR.White,
    marginHorizontal: scale(20),
    borderRadius: scale(30),
    elevation: 50,
    marginTop: scale(60),
  },

  optionText1: {
    marginTop: scale(-20),
    alignSelf: 'center',
    color: CUSTOM_COLOR.Black,
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(22),
    textAlign: 'center',
  },

  optionText2: {
    marginTop: scale(10),
    alignSelf: 'center',
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(17),
    textAlign: 'center',
  },
  imageOption: {
    width: scale(150),
    height: scale(150),
    top: scale(-40),
    left: scale(0),
    borderRadius: 220,
    alignSelf: 'center',
  },
  title: {
    alignSelf: 'center',
    color: CUSTOM_COLOR.Black,
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(28),
    textAlign: 'center',
    marginTop: scale(30),
  },
});
export default styles;