import React, { Component } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
<<<<<<< HEAD
import styles from './styles';
import {IMG_Logo, IMG_background} from '../../assets/images';
=======
import CUSTOM_COLOR from '../../constants/colors';
import CUSTOM_FONT from '../../constants/fonts';
import scale from '../../constants/responsive';
import { IMG_Logo, IMG_background } from '../../assets/images';
>>>>>>> 73dbc3d08b60e14d929db2670839150ab143a804
import { AuthContext } from '../../contexts/AuthContext';
import { signOut } from 'firebase/auth/react-native';
import { auth } from '../../firebase-config';

<<<<<<< HEAD
=======
import styles from './styles';
>>>>>>> 73dbc3d08b60e14d929db2670839150ab143a804
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
<<<<<<< HEAD
            console.log(this.context)
            // this.context.logout();
            // console.log(this.context);
=======
>>>>>>> 73dbc3d08b60e14d929db2670839150ab143a804
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

<<<<<<< HEAD

Onboarding.contextType = AuthContext;
=======
Onboarding.contextType = AuthContext;
>>>>>>> 73dbc3d08b60e14d929db2670839150ab143a804
