import {Component} from 'react';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, View, Text, TextInput} from 'react-native';
import {IMG_search, IMG_vector} from '../../assets/images';
import {IMG_cart} from '../../assets/images';
import styles from './styles';

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
