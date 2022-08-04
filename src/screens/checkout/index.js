import React, {useState} from 'react';
import {SafeAreaView, TouchableOpacity, View, Image, Text} from 'react-native';
import {Modal} from 'react-native';
import {IMG_Back} from '../../assets/images';
import Delivery from './delivery';
import Method from './method';
import styles from './styles';
import Payment from './payment';
import CUSTOM_COLOR from '../../constants/colors';
import scale from '../../constants/responsive';
import CUSTOM_FONT from '../../constants/fonts';

const Checkout = props => {
  const [process, setProcess] = useState('Delivery');
  const [modalVisible, setModalVisible] = useState(false);
  const Tag = props => {
    if (process === 'Delivery') return <Delivery />;
    else return <Payment />;
  };
  const PopUp = props => {
    return (
      <View>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View
            style={styles.modalContainer}>
            <View
              style={styles.centerContainer}>
              <View
                style={styles.modalHeader}>
                <Text
                  style={styles.modalHeaderText}>
                  {'PLEASE NOTE'}
                </Text>
              </View>
              <View
                style={{
                  marginTop: scale(18),
                  width: '70%',
                  height: scale(128),
                  alignSelf: 'center',
                }}>
                <View
                  style={styles.modalInfoContainer}>
                  <Text
                    style={styles.modalTitle}>
                    {'DELIVERY TO MAINLAND'}
                  </Text>
                  <Text
                    style={styles.modalInfo}>
                    {'N1000 - N2000'}
                  </Text>
                </View>
                <View style={{flex: 1}}>
                  <Text
                    style={styles.modalTitle}>
                    {'DELIVERY TO ISLAND'}
                  </Text>
                  <Text
                    style={styles.modalInfo}>
                    {'N2000 - N3000'}
                  </Text>
                </View>
              </View>
              <View
                style={styles.modalButtonContainer}>
                <TouchableOpacity style={{flex: 1, justifyContent: 'center'}} onPress ={() => setModalVisible(false)}>
                  <Text
                    style={styles.modalCancelButton}>
                    {'Cancel'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.modalProcessContainer}
                  onPress ={() => props.navigation.navigate('Home')}>
                  <Text
                    style={styles.modalProcessText}>
                    {'Process'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.workSpace}>
        <TouchableOpacity
          onPress={() =>
            process === 'Delivery'
              ? props.navigation.goBack()
              : setProcess('Delivery')
          }>
          <Image source={IMG_Back} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{'Checkout'}</Text>
        <Text style={styles.label}>{process}</Text>
        <Tag />
        <Text style={styles.deliMethodText}>{'Delivery methods'}</Text>
        <Method />
        <View style={styles.footer}>
          <Text style={styles.total}>{'Total'}</Text>
          <Text style={styles.cost}>{'23.000'}</Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            process === 'Delivery'
              ? setProcess('Payment')
              : setModalVisible(true)
          }>
          <Text style={styles.buttonText}>{'Update'}</Text>
        </TouchableOpacity>
      </View>
      <PopUp navigation={props.navigation} />
    </SafeAreaView>
  );
};

export default Checkout;
