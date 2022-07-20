import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native';
import CUSTOM_COLOR from '../constants/colors';
import CUSTOM_FONT from '../constants/fonts';
import scale from '../constants/responsive';

export default class UnderlineButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onPress() {
    this.props.onPress();
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.onPress()} style={this.props.style}>{this.props.children}</TouchableOpacity>
        {/* Line */}
        <View style={[this.props.underlineStyle,{position:'absolute',bottom:0}]}/>
      </View>
    );
  }
};
