import React, {Component} from 'react';
import {TouchableOpacity,View} from 'react-native';

export default class UnderlineButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.onPress()} style={this.props.style}>{this.props.children}</TouchableOpacity>
        {/* Line */}
        <View style={[this.props.underlineStyle,{position:'absolute',bottom:0}]}/>
      </View>
    );
  }
};
