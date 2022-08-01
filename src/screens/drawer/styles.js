import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import CUSTOM_FONT from '../../constants/fonts';
import scale from '../../constants/responsive';

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    flex: 1,
  },
  user: {
    alignSelf: 'center',
    marginTop: scale(65),
  },
  signOut: {
    top: '83%',
    marginLeft: scale(40),
  },
  buttonContainer: {
    marginLeft: scale(40),
    marginTop: scale(29),
    marginRight: scale(50),
  },
  home: {
    height: scale(78),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    color: CUSTOM_COLOR.White,
    fontFamily: CUSTOM_FONT.PoppinsSemiBold,
    fontSize: scale(17),
    lineHeight: scale(25.5),
    position:'absolute',
  },
});

export default styles;
