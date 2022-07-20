import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, Image, Text} from 'react-native';
import SwitchButton from '../../../components/SwitchButton';
import scale from '../../../constants/responsive';
import {IMG_bella, IMG_vector1} from '../../../assets/images';
import Form from '../forms';
import CUSTOM_COLOR from '../../../constants/colors';
import UnderlineButton from '../../../components/UnderlineButton';
import CUSTOM_FONT from '../../../constants/fonts';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'Login',
    };
  }
  render() {
    // return JSX
    console.log('this.state', this.state);

    return (
      <SafeAreaView
        style={styles.container}
        onPressHandle={() => {
          this.getData();
        }}>
        <View style={styles.upper}>
          {/*Logo*/}
          <View style={styles.logoContainer}>
            <Image source={IMG_bella} style={styles.logo} />
            <Image
              source={IMG_vector1}
              style={{
                position: 'absolute',
                marginLeft: scale(242),
                marginTop: scale(164.81),
              }}
            />
          </View>
          <SwitchButton
            containerStyle={{
              width: '100%',
              height: 100,
              position: 'absolute',
              bottom: 0,
            }}
            flexGrow={1}
            justifyContent={'center'}
            flexDirection={'row'}>
            <View style={styles.buttonContainer}>
              <UnderlineButton
                label={'Login'}
                onPress={() => this.setState({label: 'Login'})}
                underlineStyle={[
                  styles.underline,
                  {
                    backgroundColor:
                      this.state.label == 'Login'
                        ? CUSTOM_COLOR.SunsetOrange
                        : 'transparent',
                  },
                ]}>
                <Text style={styles.buttonText}>{'Login'}</Text>
              </UnderlineButton>
              <UnderlineButton
                label={'Sign-Up'}
                onPress={() => this.setState({label: 'SignUp'})}
                underlineStyle={[
                  styles.underline,
                  {
                    backgroundColor:
                      this.state.label != 'Login'
                        ? CUSTOM_COLOR.SunsetOrange
                        : 'transparent',
                  },
                ]}>
                <Text style={styles.buttonText}>{'Sign-Up'}</Text>
              </UnderlineButton>
            </View>
          </SwitchButton>
        </View>
        <Form label={this.state.label} other={this.props}/>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
  },

  upper: {
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    height: scale(382),
    elevation: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    top: -20,
    overflow: 'hidden',
  },
  logoContainer: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  logo: {
    width: scale(131.53),
    height: scale(162.38),
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  buttonContainer: {
    paddingTop: 10,
    width: '100%',
    flexDirection: 'row',
    bottom: 0,
    position: 'absolute',
    overflow: 'hidden',
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 1,
    position:'absolute',
    bottom: 10,
  },
  buttonText: {
    color: 'black',
    fontFamily: CUSTOM_FONT.Bold,
    alignSelf: 'center',
    justifyContent: 'center',
    fontSize: 18,
  },

  underline: {
    width: scale(134),
    height: 3,
    alignSelf: 'center',
  },
});
