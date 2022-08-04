import {StyleSheet} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import CUSTOM_FONT from '../../constants/fonts';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.WhiteSmoke,
  },
  workSpace: {
    marginTop: scale(66),
    marginLeft: scale(50),
    marginRight: scale(57),
    marginBottom: scale(41),
    height: '100%',
  },
  label: {
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(34),
    marginTop: scale(40),
    color: CUSTOM_COLOR.Black,
  },
  headerText: {
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(18),
    lineHeight: scale(22.94),
    position: 'absolute',
    color: CUSTOM_COLOR.Black,
    alignSelf: 'center',
  },
  buttonContainer: {
    width: scale(314),
    height: scale(70),
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: scale(49),
  },

  buttonText: {
    color: CUSTOM_COLOR.White,
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(17),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  deliMethodText: {
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(17),
    color: CUSTOM_COLOR.Black,
    marginTop: scale(42),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: scale(70),
  },
  total: {
    flex: 1,
    color: CUSTOM_COLOR.Black,
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(17),
  },
  cost: {
    flex: 1,
    color: CUSTOM_COLOR.Black,
    textAlign: 'right',
    fontFamily: CUSTOM_FONT.AbelRegular,
    fontSize: scale(17),
  },
  modalContainer:{
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerContainer: {
    width: scale(315),
    height: scale(322),
    backgroundColor: CUSTOM_COLOR.White,
    borderRadius: scale(30),
    overflow: 'hidden',
  },
  modalHeader: {
    width: '100%',
    height: scale(66),
    backgroundColor: CUSTOM_COLOR.Gallery,
    justifyContent: 'center',
  },
  modalHeaderText: {
    fontFamily: CUSTOM_FONT.PoppinsBold,
    fontSize: scale(17),
    color: CUSTOM_COLOR.Black,
    marginLeft: scale(46),
  },
  modalInfoContainer: {
    flex: 1,
    borderBottomColor: CUSTOM_COLOR.SilverChalice,
    borderBottomWidth: scale(0.5),
  },
  modalTitle: {
    fontFamily: CUSTOM_FONT.PoppinsMedium,
    fontSize: scale(17),
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
  },
  modalInfo: {
    fontFamily: CUSTOM_FONT.PoppinsMedium,
    fontSize: scale(17),
    color: CUSTOM_COLOR.Black,
  },
  modalButtonContainer: {
    position: 'absolute',
    marginRight: scale(18),
    bottom: scale(17),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modalCancelButton: {
    textAlign: 'left',
    fontFamily: CUSTOM_FONT.PoppinsSemiBold,
    color: CUSTOM_COLOR.Black,
    opacity: 0.5,
    fontSize: scale(17),
    lineHeight: scale(25.5),
    alignSelf: 'center',
  },
  modalProcessContainer: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.SunsetOrange,
    width: scale(159),
    height: scale(60),
    borderRadius: scale(30),
    justifyContent: 'center',
  },
  modalProcessText: {
    fontFamily: CUSTOM_FONT.PoppinsSemiBold,
    color: CUSTOM_COLOR.White,
    fontSize: scale(17),
    lineHeight: scale(25.5),
    alignSelf: 'center',
  },
});

export default styles;
