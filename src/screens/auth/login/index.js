import React, {Component} from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import SwitchButton from '../../../components/SwitchButton';
import scale from '../../../constants/responsive';
import {IMG_bella, IMG_vector1} from '../../../assets/images';
import {LoginForm} from './LoginForm';
import {SignUp} from './SignUpForm';

function Condition(props) {
  if (props.label == 'login') return <LoginForm {...props.props} />;
  else return <SignUp {...props.props} />;
}

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: 'login',
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
          <SwitchButton onPress={label => this.setState({label: label})} />
        </View>
        <Condition label={this.state.label} props={this.props} />
      </SafeAreaView>
    );
  }
}

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
});
