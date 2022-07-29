import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, SafeAreaView, TextInput, Button} from 'react-native';

function CustomInput(props) {
  console.log('props', props);
  const [value, setValue] = useState(props.label);
  return (
    <>
      <Text>{props.label}</Text>
      <TextInput
        style={styles.inputContainer}
        onChangeText={text => {
          setValue(text);
        }}
        placeholder ='Type here'
        value={Text}
      />
    </>
  );
}

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {name: props.name};
  }

  changeNameHandle = newValue => {
    this.setState({
      name: newValue,
    });
  };

  render() {
    // return JSX
    console.log('this.state', this.state);

    return (
      <SafeAreaView
        style={styles.container}
        onPressHandle={() => {
          this.getData();
        }}>
        {/*Title*/}
        <Text style ={styles.Title}>
          {'Testing'}
        </Text>
        {/* Username */}
        <CustomInput
          label={'Username: '}
        />

        {/* Password */}
        <CustomInput 
          label = {'Password: '}
        />
        <Button title = {'Sign in'} style = {styles.Button}>

        </Button>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    backgroundColor: 'orange',
    height: 40,
  },
  Title: {
    alignSelf: 'center',
    fontSize: 100,
    fontWeight: 'bold',
  },
  Button: {
    alignSelf: 'center',
    borderRadius: 60,
    width: 100,
    height: 50,
  }
});

export default SignIn;
