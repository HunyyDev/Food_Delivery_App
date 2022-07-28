import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import CUSTOM_COLOR from '../../constants/colors';
import CUSTOM_FONT from '../../constants/fonts';
import scale from '../../constants/responsive';
import { IMG_Logo, IMG_background } from '../../assets/images';
import { AuthContext } from '../../contexts/AuthContext';
import { signOut } from 'firebase/auth/react-native';
import { auth } from '../../firebase-config';

import styles from './styles';
export class Onboarding extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          style={styles.scrollView}>
          <View>
            <>{/* Logo */}</>
            <View style={styles.logoContainer}>
              <Image source={IMG_Logo} style={styles.logo}></Image>
            </View>
            <>{/* Title */}</>
            <Text style={styles.Text}>{'Food for \nEveryone'}</Text>
            <>{/* background */}</>
            <View style={styles.backgroundContainer}>
              <Image source={IMG_background} style={styles.background} />
            </View>
          </View>
        </ScrollView>
        <>{/* Button */}</>
        <TouchableOpacity
          onPress={async () => {
            await signOut(auth);
            if (this.context.user) {
              this.props.navigation.navigate('HomeScreen')
            } else {
              this.props.navigation.navigate('Login')
            }
          }}
          style={styles.buttonContainer}>
          <Text style={styles.buttonText}>{'Get started '}</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

Onboarding.contextType = AuthContext;
