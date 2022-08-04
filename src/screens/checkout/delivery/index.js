import React from 'react';
import styles from './styles';
import {View, TouchableOpacity, Text} from 'react-native';
import Tag from './tag';
const Delivery = props => {
  return (
    <>
      <View style={styles.headerTab}>
        <Text style={styles.detailText}>{'Address details'}</Text>
        <TouchableOpacity>
          <Text style={styles.changeButton}>{'change'}</Text>
        </TouchableOpacity>
      </View>
      <Tag
        user={{
          name: 'Marvis Kparobo',
          address:
            'Km 5 refinery road oppsite republic road, effurun, delta state',
          phoneNum: '+234 9011039271',
        }}
      />
    </>
  );
};

export default Delivery;
