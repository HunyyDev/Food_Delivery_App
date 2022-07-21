import React, {Component} from 'react';
import {View, SafeAreaView, Image, Text} from 'react-native';
import SwitchButton from '../../../components/SwitchButton';
import scale from '../../../constants/responsive';
import {IMG_bella, IMG_vector1} from '../../../assets/images';
import Form from '../forms';
import CUSTOM_COLOR from '../../../constants/colors';
import UnderlineButton from '../../../components/UnderlineButton';
import styles from './styles';

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