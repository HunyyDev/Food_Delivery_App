import { StyleSheet } from "react-native";
import CUSTOM_COLOR from "../../constants/colors";
import CUSTOM_FONT from "../../constants/fonts";
import scale from "../../constants/responsive";
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
      width: scale(185),
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
  });
export default styles;