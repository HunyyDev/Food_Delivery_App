import React, {useState} from 'react';
import {View, Image, Text, TextInput} from 'react-native';
import styles from './styles';
import {IMG_Profile} from '../../../../assets/images';
import CUSTOM_FONT from '../../../../constants/fonts';
import scale from '../../../../constants/responsive';
import CUSTOM_COLOR from '../../../../constants/colors';
const Tag = props => {
  const [user, setUser] = useState(props.user);
  return (
    <View style={styles.informationTag}>
      <View style={styles.imgContainer}>
        <Image source={IMG_Profile} resizeMode={'contain'} />
      </View>
      <View style={styles.tag}>
        <TextInput
          onChangeText={text =>
            setUser({
              name: text,
              email: user.email,
              description: user.description,
            })
          }
          style={[
            styles.text,
            {
              fontFamily: CUSTOM_FONT.AbelRegular,
              lineHeight: scale(10),
              flex:1,
              top: scale(-5),
              paddingTop: 0,
              paddingBottom: 0,
            },
          ]}
          value={user.name}/>
        <TextInput
          onChangeText={text =>
            setUser({
              name: user.name,
              email: text,
              description: user.description,
            })
          }
          style={[
            styles.text,
            {
              fontFamily: CUSTOM_FONT.AbelRegular,
              fontSize: scale(13),
              opacity: 0.8,
              flex:1 ,
              textAlignVertical: 'top',
              top: scale(-13),
              paddingTop: 0,
              paddingBottom: 0,
            },
          ]}
          value={user.email}/>
        <TextInput
          onChangeText={text =>
            setUser({name: user.name, email: user.email, description: text})
          }
          style={[
            styles.text,
            {
              width: scale(191),
              fontFamily: CUSTOM_FONT.Regular,
              fontSize: scale(13),
              opacity: 0.5,
              flex:1 ,
              textAlignVertical: 'top',
              paddingTop: 0,
              paddingBottom: 0,
              top: scale(-28),
            },
          ]}
          multiline={true}
          value={user.description}></TextInput>
      </View>
    </View>
  );
};
export default Tag;
