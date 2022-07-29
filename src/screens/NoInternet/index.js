import React, {Component} from 'react';
import {SafeAreaView, TouchableOpacity, Image, Text} from 'react-native';
import styles from './styles';
import {IMG_noInternet} from '../../assets/images';
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
        {/* Logo */}
        <Image
          source={IMG_noInternet}
          style={{alignSelf: 'center', marginTop: scale(200)}}
        />
        <Text
          style={{
            fontFamily: CUSTOM_FONT.Bold,
            fontSize: scale(40),
            alignSelf: 'center',
            color: CUSTOM_COLOR.Black,
          }}>
          {'No internet Connection'}
        </Text>
        <Text
          style={{
            fontFamily: CUSTOM_FONT.Regular,
            fontSize: scale(20),
            alignSelf: 'center',
            width: scale(240),
            textAlign: 'center',
          }}>
          {'Your internet connection is currently not available please check or try again.'}
        </Text>
        <></>
        {/* Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            {'Try again'}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Orders;
