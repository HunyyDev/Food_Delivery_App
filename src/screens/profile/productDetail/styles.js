import { StyleSheet } from "react-native";
import CUSTOM_COLOR from "../../../constants/colors";
import scale from "../../../constants/responsive";
import { Dimensions } from "react-native";
import CUSTOM_FONT from "../../../constants/fonts";

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    top: scale(30),
    height: scale(40),
    width: '100%',
  },
  backButton: {
    height: '100%',
    width: scale(50),
    justifyContent: 'center',
    position: 'absolute',
    left: scale(60),
    marginTop: scale(3),
  },
  HeartButton: {
    height: '100%',
    width: scale(50),
    right: scale(60),
    marginTop: scale(10),
    position: 'absolute',
  },
  iconBack: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.32,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(50),
  },
  imageFood: {
    width: WIDTH,
    height: HEIGHT * 0.32,
    justifyContent: 'center',
  },
  food: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'pink'
  },
  wrapDot: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    position: 'absolute',
    flexDirection: 'row',
  },
  backgroundName: {
    width: '60%',
    height: scale(40),
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: scale(20),
  },
  backgroundPrice: {
    width: '40%',
    height: scale(40),
    alignSelf: 'center',
    justifyContent: 'center',
  },
  textFoodContainer: {
    fontFamily: CUSTOM_FONT.Bold,
    fontSize: 18,
    color: CUSTOM_COLOR.Black,
    lineHeight: 22,
    alignSelf: 'center',
  },
  textPriceContainer: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: CUSTOM_FONT.Bold,
    fontSize: 15,
    alignSelf: 'center',
    lineHeight: 20,
  },
  backgroundInfo: {
    width: '80%',
    height: scale(100),
    alignSelf: 'center',
    marginTop: scale(10),
  },
  division: {
    marginTop: scale(20),
    fontFamily: CUSTOM_FONT.Bold,
    fontSize: 16,
    color: CUSTOM_COLOR.Black,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },
  content: {
    fontSize: 14,
    color: CUSTOM_COLOR.Black,
    lineHeight: 22,
    alignSelf: 'flex-start',
  },
  SelectionText: {
    color: CUSTOM_COLOR.White,
    fontSize: 15,
    fontFamily: CUSTOM_FONT.ProText,
    alignSelf: 'center',
  },
  buttonSelection: {
    width: scale(314),
    height: scale(70),
    borderRadius: 30,
    backgroundColor: CUSTOM_COLOR.Vermilion,
    justifyContent: 'center',
    marginTop: scale(180),
    alignSelf: 'center',
  },
});

export default styles;
