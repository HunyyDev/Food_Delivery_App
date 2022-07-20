import React, {Component} from 'react';
import {View, ScrollView,Text} from 'react-native';
export default class SwitchButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={this.props.containerStyle}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: this.props.justifyContent,
            flexGrow: this.props.flexGrow,
          }}
          style={{
            flexGrow: this.props.flexGrow,
            width: '100%',
            height: '100%',
            flexDirection: this.props.flexDirection,
          }}>
          {this.props.children}
        </ScrollView>
      </View>
    );
  }
};