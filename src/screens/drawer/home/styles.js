import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../../constants/colors';
import CUSTOM_FONT from '../../../constants/fonts';
import scale from '../../../constants/responsive';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.WhiteSmoke,
  },
  vectorContainer: {
    width: scale(22),
    height: scale(14.67),
    top: scale(74),
    left: scale(54.6),
    position: 'absolute',
  },
  cartContainer: {
    width: scale(22),
    height: scale(15),
    top: scale(66),
    right: scale(42),
    position: 'absolute',
  },
  title: {
    color: CUSTOM_COLOR.Black,
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(34),
  },
  titleContainer: {
    width: scale(200),
    height: scale(93),
    top: scale(132),
    left: scale(50),
    position: 'absolute',
  },

  searchContainer: {
    width: scale(314),
    height: scale(60),
    top: scale(242),
    left: scale(50),
    borderRadius: scale(30),
    backgroundColor: CUSTOM_COLOR.Whisper,
    flexDirection: 'row',
  },
  searchImage: {
    width: scale(18),
    height: scale(18),
    top: scale(21),
    left: scale(35),
  },

  searchInput: {
    top: scale(0),
    left: scale(50),
    height: '100%',
    width: '100%',
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
  },

  typeContainer: {
    top: scale(280),
    height: scale(30),
  },

  type: {
    width: '100%',
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(17),
    marginRight: scale(91),
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  scrollContainer: {
    backgroundColor: CUSTOM_COLOR.Whisper,
    top: scale(340),
    height: scale(350),
  },

  option: {
    top: scale(60),
    width: scale(220),
    height: scale(280),
    backgroundColor: CUSTOM_COLOR.White,
    marginRight: scale(40),
    borderRadius: scale(30),
  },

  optionText1: {
    marginTop: scale(-20),
    alignSelf: 'center',
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(22),
    textAlign: 'center',
  },

  optionText2: {
    marginTop: scale(10),
    alignSelf: 'center',
    opacity: 0.5,
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(17),
    textAlign: 'center',
  },

  imageOption: {
    width: scale(180),
    height: scale(180),
    top: scale(-40),
    left: scale(0),
    borderRadius: 220,
    alignSelf: 'center',
  },

  buttonContainer: {
    flex: 1, 
    flexDirection: 'row', 
    position: 'absolute', 
    bottom: 20, 
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  underline: {
    backgroundColor: CUSTOM_COLOR.Vermilion,
    width: '80%',
    height: 3,
    alignSelf: 'center',
  },

  seeMore: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(15),
    alignSelf: 'center',
  },

  moreContainer: {
    top: scale(-40),
    right: scale(20),
    position: 'absolute',
  },
});

export default styles;
