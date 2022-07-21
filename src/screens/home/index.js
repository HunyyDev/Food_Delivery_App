import {Component} from 'react';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import {IMG_search, IMG_vector} from '../../assets/images';
import {IMG_cart} from '../../assets/images';
import {IMG_Scroll1, IMG_Scroll2} from '../../assets/images';
import {IMG_Tym, IMG_History, IMG_Home, IMG_user} from '../../assets/images';

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
        <></>
        {/* Type of food */}
        <View style={styles.typeContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={styles.type}>{'Foods'}</Text>
            <Text style={styles.type}>{'Drinks'}</Text>
            <Text style={styles.type}>{'Snacks'}</Text>
            <Text style={styles.type}>{'Sauce'}</Text>
          </ScrollView>
        </View>
        <></>
        {/* Big ScrollView */}
        <View style={styles.scrollContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.option}></View>
            <View style={styles.option}>
              <Image source={IMG_Scroll1} style={styles.imageOption} />
              <Text style={styles.optionText1}>
                {'    Veggie \ntomato mix'}
              </Text>
              <Text style={styles.optionText2}>{'N1,900'}</Text>
            </View>
            <View style={styles.option}>
              <Image source={IMG_Scroll2} style={styles.imageOption} />
              <Text style={styles.optionText1}>{'Veggie \ntomato mix'}</Text>
              <Text style={styles.optionText2}>{'N1,900'}</Text>
            </View>
          </ScrollView>
        </View>
        <></>
        {/* Tools */}
        <View style={styles.homeContainer}>
          <Image source={IMG_Home} />
        </View>
        <View style={styles.tymContainer}>
          <Image source={IMG_Tym} />
        </View>
        <View style={styles.userContainer}>
          <Image source={IMG_user} />
        </View>
        <View style={styles.historyContainer}>
          <Image source={IMG_History} style={{opacity: 0.5}} />
        </View>
      </SafeAreaView>
    );
  }
}