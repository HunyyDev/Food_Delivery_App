import React, {useState} from "react";
import CUSTOM_COLOR from "../../../constants/colors";
import { View } from "react-native";
import ChooseButton from "../../../components/ChooseButton";
import { IMG_Card } from "../../../assets/images";
import styles from "./styles";
const Payment = () => {
    const [select, setSelect] = useState('Card');
    return (
      <View style={styles.buttonContainer}>
        <ChooseButton
          onPress = {() => setSelect('Card')}
          style={styles.buttonStyle}
          shape={[
            styles.shape,
            {
              borderColor:
                select == 'Card'
                  ? CUSTOM_COLOR.SunsetOrange
                  : CUSTOM_COLOR.SilverChalice,
            },
          ]}
          inner={[
            styles.inner,
            {backgroundColor: select == 'Card' ? CUSTOM_COLOR.SunsetOrange : 'transparent'},
          ]}
          logoContainer={[
            styles.logoContainer,
            {backgroundColor: CUSTOM_COLOR.TahitiGold},
          ]}
          source={IMG_Card}
          titleStyle={[styles.title,{borderBottomWidth: 0.5, borderBottomColor: CUSTOM_COLOR.SilverChalice}]}
          title={'Card'}
        />
        <ChooseButton
          style={styles.buttonStyle}
          onPress = {() => setSelect('Bank account')}
          shape={[
            styles.shape,
            {
              borderColor:
                select == 'Bank account'
                  ? CUSTOM_COLOR.SunsetOrange
                  : CUSTOM_COLOR.SilverChalice,
            },
          ]}
          inner={[
            styles.inner,
            {
              backgroundColor:
                select == 'Bank account'
                  ? CUSTOM_COLOR.SunsetOrange
                  : 'transparent',
            },
          ]}
          logoContainer={[
            styles.logoContainer,
            {backgroundColor: CUSTOM_COLOR.FrenchRose},
          ]}
          source={IMG_Card}
          titleStyle={[styles.title,{borderBottomWidth: 0.5, borderBottomColor: CUSTOM_COLOR.SilverChalice}]}
          title={'Bank account'}
        />
        <ChooseButton
          style={styles.buttonStyle}
          onPress = {() => setSelect('Paypal')}
          shape={[
            styles.shape,
            {
              borderColor:
                select == 'Paypal'
                  ? CUSTOM_COLOR.SunsetOrange
                  : CUSTOM_COLOR.SilverChalice,
            },
          ]}
          inner={[
            styles.inner,
            {
              backgroundColor:
                select == 'Paypal' ? CUSTOM_COLOR.SunsetOrange : 'transparent',
            },
          ]}
          logoContainer={[
            styles.logoContainer,
            {backgroundColor: CUSTOM_COLOR.CornflowerBlue},
          ]}
          source={IMG_Card}
          titleStyle={styles.title}
          title={'Paypal'}
        />
      </View>
    );
  };
  
  export default Payment;
  