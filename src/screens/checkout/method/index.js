import React, {useState} from 'react';
import CUSTOM_COLOR from '../../../constants/colors';
import {View} from 'react-native';
import ChooseButton from '../../../components/ChooseButton';
import styles from './styles';
const Method = () => {
  const [select, setSelect] = useState('Door');
  return (
    <View style={styles.buttonContainer}>
      <ChooseButton
        onPress={() => setSelect('Door')}
        style={styles.buttonStyle}
        shape={[
          styles.shape,
          {
            borderColor:
              select == 'Door'
                ? CUSTOM_COLOR.SunsetOrange
                : CUSTOM_COLOR.SilverChalice,
          },
        ]}
        inner={[
          styles.inner,
          {
            backgroundColor:
              select == 'Door' ? CUSTOM_COLOR.SunsetOrange : 'transparent',
          },
        ]}
        titleStyle={[styles.title,{borderBottomWidth: 0.5, borderBottomColor: CUSTOM_COLOR.SilverChalice}]}
        title={'Door delivery'}
      />
      <View style = {styles.underline}/>
      <ChooseButton
        style={styles.buttonStyle}
        onPress={() => setSelect('PickUp')}
        shape={[
          styles.shape,
          {
            borderColor:
              select == 'PickUp'
                ? CUSTOM_COLOR.SunsetOrange
                : CUSTOM_COLOR.SilverChalice,
          },
        ]}
        inner={[
          styles.inner,
          {
            backgroundColor:
              select == 'PickUp' ? CUSTOM_COLOR.SunsetOrange : 'transparent',
          },
        ]}
        titleStyle={styles.title}
        title={'Pick up'}
      />
    </View>
  );
};

export default Method;
