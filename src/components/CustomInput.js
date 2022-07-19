import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  TextInput,
  _Text,
} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import CUSTOM_FONT from '../constants/fonts';
export class CustomInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      label: props.label,
      value: '',
      secureTextEntry: props.secureTextEntry,
    };
  }
  render() {
    return (
      <>
        <Text style={styles.inputLabel}>{this.state.label}</Text>
        <TextInput
          style={styles.inputContainer}
          onChangeText={text => this.setState({value: text})}
          placeholder={this.props.placeHolder}
          placeholderTextColor={CUSTOM_COLOR.Whisper}
          secureTextEntry={this.props.secureTextEntry}
          value={this.state.value}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    height: 40,
    color: CUSTOM_COLOR.Black,
    borderBottomColor: CUSTOM_COLOR.Black,
    borderBottomWidth: 1,
    fontFamily: CUSTOM_FONT.ROUNDED,
  },

  inputLabel: {
    color: CUSTOM_COLOR.Black,
    opacity: 0.4,
  },
});
