import HomeScreen from './home';
import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import SignOut from './signOut';
import styles from './styles';
import {
  IMG_BigUser,
  IMG_Cart2,
  IMG_Paper,
  IMG_ProfileLogo,
  IMG_Shield,
  IMG_Tag,
  IMG_ToRightArrow,
} from '../../assets/images';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import scale from '../../constants/responsive';
import CUSTOM_COLOR from '../../constants/colors';
import Orders from '../orders';
import UserProfile from '../profile';
import Profile from '../profile/profileChange';

const Button = props => {
  return (
    <TouchableOpacity
      style={{ height: scale(78), justifyContent: 'center' }}
      onPress={() => props.navigation.jumpTo(props.component)}>
      <Image source={props.source} />
      <Text
        style={[
          styles.text,
          {
            width: scale(132),
            height: '100%',
            textAlignVertical: 'center',
            marginLeft: scale(35),
            borderBottomColor: CUSTOM_COLOR.AthensGray,
            borderBottomWidth: 0.3,
          },
        ]}>
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};

const Drawer = createDrawerNavigator();
const MyDrawer = () => {
  const CustomScrollDrawer = props => {
    return (
      <DrawerContentScrollView
        contentContainerStyle={{ flex: 1, flexGrow: 1 }}
        style={styles.container}>
<<<<<<< src/screens/drawer/index.js
        <Image source={IMG_BigUser} style={styles.user}></Image>
=======
        <TouchableOpacity onPress={() => props.navigation.jumpTo('Profile')}>
          <Image source={IMG_BigUser} style={styles.user}></Image>
        </TouchableOpacity>
>>>>>>> src/screens/drawer/index.js
        <View style={styles.buttonContainer}>
          <Button
            label="Profile"
            source={IMG_ProfileLogo}
            component="Profile"
            navigation={props.navigation}
          />
          <Button
            label="orders"
            source={IMG_Cart2}
            component="Orders"
            navigation={props.navigation}
          />
          <Button label="offer and promo" source={IMG_Tag} />
          <Button label="Privacy policy" source={IMG_Paper} />
          <Button label="Security" source={IMG_Shield} />
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: scale(36),
            left: scale(35),
            width: '100%',
            flexDirection: 'row',
          }}
          onPress={() => props.navigation.jumpTo('SignOut')}>
          <Text style={[styles.text, { position: 'relative' }]}>
            {'Sign-out'}
          </Text>
          <Image
            source={IMG_ToRightArrow}
            style={{ marginLeft: scale(12), alignSelf: 'center' }}
          />
        </TouchableOpacity>
      </DrawerContentScrollView>
    );
  };
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, drawerStyle: { width: scale(259) }, swipeEdgeWidth: scale(40) }}
      drawerContent={CustomScrollDrawer}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="SignOut" component={SignOut}
        {...props => <SignOut {...props} />}
      />
      <Drawer.Screen name="Orders" component={Orders} />
<<<<<<< src/screens/drawer/index.js
      <Drawer.Screen name ="Profile" component={UserProfile} />
      <Drawer.Screen name ='ChangeProfile' component = {Profile}/>
=======
      <Drawer.Screen name="Profile" component={Profile} />
>>>>>>> src/screens/drawer/index.js
    </Drawer.Navigator>
  );
};

export default MyDrawer;
