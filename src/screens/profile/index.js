import React, { useContext, useState } from 'react';
import { SafeAreaView, Image, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { IMG_Back, IMG_Forward } from '../../assets/images';
import Tag from './userTag';
import { AuthContext } from '../../contexts/AuthContext';

const UserProfile = props => {
  var userData = useContext(AuthContext).userData;
  const [user, setUser] = useState(useContext(AuthContext).userData);


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.workSpace}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Image source={IMG_Back} style={styles.backButton} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{'My profile'}</Text>
        <View style={styles.headerTab}>
          <Text style={styles.detailText}>{'Personal details'}</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('ChangeProfile')}>
            <Text style={styles.changeButton}>{'change'}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tagContainer}>
          <Tag user={user} />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate('Orders')}>
          <Text style={styles.buttonText}>{'Orders'}</Text>
          <Image source={IMG_Forward} style={styles.buttonPic} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{'Pending reviews'}</Text>
          <Image source={IMG_Forward} style={styles.buttonPic} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{'Faq'}</Text>
          <Image source={IMG_Forward} style={styles.buttonPic} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{'Help'}</Text>
          <Image source={IMG_Forward} style={styles.buttonPic} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserProfile;
