import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import CUSTOM_FONT from '../../constants/fonts';
import scale from '../../constants/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.AthensGray,
  },
  button: {
    width: scale(6),
    height: scale(12),
    position: 'absolute',
    left: scale(50),
  },
  backButton: {},
  header: {
    flexDirection: 'row',
    marginTop: scale(66),
    justifyContent: 'center',
  },
  headerText: {
    color: CUSTOM_COLOR.Black,
    fontFamily: CUSTOM_FONT.Bold,
    fontSize: scale(18),
    lineHeight: scale(21.48),
  },
  informationContainer: {
    width: '100%',
    height: scale(155),
  },
  informationLabel: {
    color: CUSTOM_COLOR.Black,
    fontFamily: CUSTOM_FONT.Bold,
    fontSize: scale(17),
    lineHeight: scale(20.29),
  },
  paymentMethod: {
    position: 'absolute',
    top: scale(233),
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    marginLeft: scale(50),
    marginRight: scale(50),
    marginTop: scale(56),
  },
  buttonContainer: {
    width: scale(314),
    height: scale(70),
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    borderRadius: 30,
    position: 'absolute',
    marginLeft: scale(51),
    justifyContent: 'center',
    alignSelf: 'center',
    top: scale(790),
  },

  buttonText: {
    color: CUSTOM_COLOR.White,
    fontFamily: CUSTOM_FONT.Bold,
    fontSize: scale(17),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default styles;
