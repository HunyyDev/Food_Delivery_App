import React, { useContext, useState } from 'react';
import { SafeAreaView, Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { IMG_Back } from '../../../assets/images';
import Tag from './Tag';
import Payment from '../payment';
import { AuthContext } from '../../../contexts/AuthContext';
import firestore from '@react-native-firebase/firestore';

const Profile = props => {
  var userData = useContext(AuthContext).userData;
  var userUID = useContext(AuthContext).user.uid;

  const [user, setUser] = useState(useContext(AuthContext).userData);

  var temp = user;

  var tempPaymentMethod = user.paymentMethod;
  // var tempName = user.name;
  // var tempEmail = user.email;
  // var tempDescription = user.description;

  const handleUpdatePress = async () => {
    try {
      await firestore()
        .collection('UserInfo')
        .doc(userUID)
        .set({ ...userData, ...temp, paymentMethod: tempPaymentMethod })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.goBack()}>
          <Image source={IMG_Back} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{'My profile'}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.informationContainer}>
          <Text style={styles.informationLabel}>{'Information'}</Text>
          <Tag
            user={temp}
            onNameChange={(text) => { temp.name = text }}
            onEmailChange={(text) => { temp.email = text }}
            onDesChange={(text) => { temp.description = text }}
          />
        </View>
        <View style={styles.paymentMethod}>
          <Text style={styles.headerText}>{'Payment Method'}</Text>
          <Payment
            paymentMethod={tempPaymentMethod}
            setPaymentMethod={(text) => {
              tempPaymentMethod = text;
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleUpdatePress}
      >
        <Text style={styles.buttonText}>{'Update'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
