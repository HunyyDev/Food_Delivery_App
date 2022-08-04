import {StyleSheet} from 'react-native';
import CUSTOM_FONT from '../../../constants/fonts';
import CUSTOM_COLOR from '../../../constants/colors';
import scale from '../../../constants/responsive';
const styles = StyleSheet.create({
  headerText: {
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(34),
    lineHeight: scale(43.33),
    color: CUSTOM_COLOR.Black,
    marginTop: scale(46),
  },
  detailText: {
    flex: 1,
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(18),
    lineHeight: scale(22.94),
    color: CUSTOM_COLOR.Black,
    marginTop: scale(42),
  },
  headerTab: {
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  changeButton: {
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(15),
    lineHeight: scale(19.22),
    color: CUSTOM_COLOR.SunsetOrange,
    flex: 1,
    marginTop: scale(42),
    marginRight: scale(12),
  },

});
export default styles;
