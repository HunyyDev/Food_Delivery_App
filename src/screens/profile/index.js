import React, {useContext, useState} from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {IMG_Back} from '../../assets/images';
import Tag from './userTag';
import Payment from './payment';
import { UserInfoContext } from '../../contexts/UserInfoContext';
import { AuthContext } from '../../contexts/AuthContext';

const Profile = props => {
  var userData = useContext(UserInfoContext)
  const [user, setUser] = useState({
    name: userData.name,
    email: userData.email,
    description: userData.description,
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.button} onPress = {() => props.navigation.goBack()}>
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
          <Payment />
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{'Update'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
