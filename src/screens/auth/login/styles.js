import CUSTOM_COLOR from '../../../constants/colors';
import CUSTOM_FONT from '../../../constants/fonts';
import {StyleSheet} from 'react-native';
import scale from '../../../constants/responsive';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 30,
  },

  upper: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: scale(382),
    elevation: 20,
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: 30,
    top: -20,
    overflow: 'hidden',
  },
  logoContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo: {
    width: scale(131.53),
    height: scale(162.38),
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
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
  underline: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    width: scale(134),
    height: 3,
    alignSelf: 'center',
  },

  buttonContainer: {
    height: 'auto',
    width: '100%',
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    overflow: 'hidden',
    justifyContent: 'space-around',
  },

  button: {
    alignSelf: 'center',
    flex: 1,
    bottom: 10,
  },

  buttonText: {
    color: CUSTOM_COLOR.Black,
    fontFamily: CUSTOM_FONT.Bold,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },
});

export default styles;
