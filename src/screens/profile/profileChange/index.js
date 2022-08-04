import React, {useState} from 'react';
import {SafeAreaView, Image, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {IMG_Back} from '../../../assets/images';
import Tag from './Tag';
import Payment from '../payment';

const Profile = props => {
  const [user, setUser] = useState({
    name: 'Marvis Ighedosa',
    email: 'dosamarvis@gmail.com',
    description: 'No 15 uti street off ovie palace road effurun delta state',
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
