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
    fontFamily: CUSTOM_FONT.Bold,
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
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
  },

  typeContainer: {
    top: scale(300),
  },

  type: {
    width: '100%',
    fontFamily: CUSTOM_FONT.Bold,
    height: scale(22),
    fontSize: scale(17),
    marginRight: scale(91),
    bottom: scale(8),
  },

  scrollContainer: {
    backgroundColor: CUSTOM_COLOR.Whisper,
    top: scale(340),
  },

  option: {
    width: scale(220),
    height: scale(350),
    backgroundColor: CUSTOM_COLOR.White,
    marginRight: scale(29),
    borderRadius: scale(30),
  },

  optionText1: {
    alignSelf: 'center',
    opacity: 0.5,
    color: CUSTOM_COLOR.Black,
    fontFamily: CUSTOM_FONT.Bold,
    fontSize: scale(22),
  },

  optionText2: {
    alignSelf: 'center',
    opacity: 0.5,
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: CUSTOM_FONT.Bold,
    fontSize: scale(17),
  },

  imageOption: {
    width: scale(220),
    height: scale(220),
    top: scale(0),
    left: scale(0),
    borderRadius: 220,
  },

  historyContainer: {
    width: scale(25.38),
    height: scale(21.75),
    bottom: scale(51.62),
    left: scale(370),
    position: 'absolute',
  },

  homeContainer: {
    width: scale(25.38),
    height: scale(21.75),
    bottom: scale(50.1),
    left: scale(53.12),
    position: 'absolute',
  },

  userContainer: {
    width: scale(25.38),
    height: scale(21.75),
    bottom: scale(53),
    left: scale(260),
    position: 'absolute',
  },

  tymContainer: {
    width: scale(25.38),
    height: scale(21.75),
    left: scale(160.55),
    bottom: scale(48),
    position: 'absolute',
  },

  underline: {
    backgroundColor: CUSTOM_COLOR.Vermilion,
    width: '80%',
    height: 3,
    alignSelf: 'center',
  },

  seeMore: {
    color: CUSTOM_COLOR.Vermilion,
    fontFamily: CUSTOM_FONT.Bold,
    fontSize: scale(15),
    alignSelf: 'center',
  },

  moreContainer: {
    top: scale(-30),
    left: scale(400),
    position: 'absolute',
  },
});

export default styles;
