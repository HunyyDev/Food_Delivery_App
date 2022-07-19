import {Component} from 'react';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, Image, View, Text, TextInput} from 'react-native';
import {IMG_search, IMG_vector} from '../../assets/images';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import {IMG_cart} from '../../assets/images';
import CUSTOM_FONT from '../../constants/fonts';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <></>
        {/* Logo1 */}
        <View style={styles.vectorContainer}>
          <Image source={IMG_vector} />
        </View>
        <></>
        {/* Logo2 */}
        <View style={styles.cartContainer}>
          <Image source={IMG_cart} style={{opacity: 0.5}} />
        </View>
        <></>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{'Delicious \nfood for you'}</Text>
        </View>
        <></>
        {/* Search Box */}
        <View style={styles.searchContainer}>
          <Image source={IMG_search} style={styles.searchImage} />
          <TextInput
            placeholder="Search"
            hitSlop={{top: '100%', bottom: '100%', left: '100%', right: '100%'}}
            placeholderTextColor={'black'}
            style={styles.searchInput}></TextInput>
        </View>
      </SafeAreaView>
    );
  }
}
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
    color: 'black',
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
    color: 'black',
  },
});
