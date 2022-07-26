
import React,  { Component } from 'react';
import { LoginForm } from './LoginForm';
import {SignUp} from './SignUpForm';
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return this.props.label == 'Login' ? (
      <LoginForm {...this.props.other} />
    ) : (
      <SignUp {...this.props} />
    );
  }
};
