import CUSTOM_COLOR from '../../../constants/colors';
import CUSTOM_FONT from '../../../constants/fonts';
import {StyleSheet} from 'react-native';
import scale from '../../../constants/responsive';
export const styles = StyleSheet.create({
  lower: {
    height: scale(419),
    marginLeft: scale(50),
    marginRight: scale(50),
    marginTop: scale(50),
    marginBottom: scale(50),
  },
  text: {
    color: CUSTOM_COLOR.SunsetOrange,
    fontFamily: CUSTOM_FONT.Regular,
    fontSize: scale(17),
  },
  button: {
    width: scale(314),
    height: scale(70),
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    borderRadius: 30,
    position: 'absolute',
    bottom: scale(41),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontFamily: CUSTOM_FONT.Regular,
    fontSize: scale(17),
    justifyContent: 'center',
    alignSelf: 'center',
  },
});