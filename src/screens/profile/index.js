import React, { useContext, useState } from 'react';
import { SafeAreaView, Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { IMG_Back } from '../../assets/images';
import Tag from './userTag';
import Payment from './payment';
import { AuthContext } from '../../contexts/AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase-config';

const Profile = props => {
  var userData = useContext(AuthContext).userData;
  var userUID = useContext(AuthContext).user.uid;
  const [user, setUser] = useState({
    name: userData.name,
    email: userData.email,
    description: userData.description,
    paymentMethod: userData.paymentMethod,
  });

  var tempPaymentMethod = user.paymentMethod;

  const handleUpdatePress = async () => {
    try {
      await setDoc(doc(db, 'UserInfo/' + userUID,), { ...user, paymentMethod: tempPaymentMethod })
      console.log('updated')
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
          <Tag user={user} />
        </View>
        <View style={styles.paymentMethod}>
          <Text style={styles.headerText}>{'Payment Method'}</Text>
          <Payment
            paymentMethod={tempPaymentMethod}
            setPaymentMethod={(text) => {
              console.log('change to ' + text);
              tempPaymentMethod = text
              console.log(tempPaymentMethod)
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
