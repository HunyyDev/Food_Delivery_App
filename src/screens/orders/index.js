import React, {Component} from 'react';
import {SafeAreaView, TouchableOpacity, Image, Text} from 'react-native';
import styles from './styles';
import {IMG_back, IMG_cartTitle} from '../../assets/images';
import scale from '../../constants/responsive';
import CUSTOM_FONT from '../../constants/fonts';
import CUSTOM_COLOR from '../../constants/colors';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
        <></>
        {/* back button */}
        <TouchableOpacity
          style={styles.backContainer}
          // hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress= {() => {
            this.props.navigation.goBack();
          }}
          >
          <Image source={IMG_back} />
        </TouchableOpacity>
        <></>
        {/* title */}
        <Text style={styles.title}>{'Orders'}</Text>
        <></>
        {/* Logo */}
        <Image
          source={IMG_cartTitle}
          style={{alignSelf: 'center', marginTop: scale(200)}}
        />
        <Text
          style={{
            fontFamily: CUSTOM_FONT.Bold,
            fontSize: scale(40),
            alignSelf: 'center',
            color: CUSTOM_COLOR.Black,
          }}>
          {'No orders yet'}
        </Text>
        <Text
          style={{
            fontFamily: CUSTOM_FONT.Regular,
            fontSize: scale(20),
            alignSelf: 'center',
            width: scale(240),
            textAlign: 'center',
            color : CUSTOM_COLOR.Black,
          }}>
          {'Hit the orange button down below to Create an order'}
        </Text>
        <></>
        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            {'Start ordering'}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Orders;
