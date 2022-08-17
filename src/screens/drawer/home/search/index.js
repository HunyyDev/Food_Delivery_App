import React, {useContext, useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  View,
  Keyboard,
  NativeModules,
  NativeEventEmitter,
} from 'react-native';
import styles from './styles';
import {IMG_back} from '../../../../assets/images';
import {TextInput} from 'react-native-gesture-handler';
import CUSTOM_COLOR from '../../../../constants/colors';
import {IMG_Scroll1, IMG_Scroll2} from '../../../../assets/images';
import scale from '../../../../constants/responsive';
import {Modal} from 'react-native';
import APIUtils from '../../../../../utils/apiUtils';
import { set } from 'react-native-reanimated';
const Search = props => {
  const [data, setData] = useState([]);
  var searchText;
  const Item = ({name, price, id, image}) => (
    <TouchableOpacity
      style={[styles.option, {top: (id% 2 == 0)? 0: 90}]}>
      <Image source={{uri: image}} style={styles.imageOption} />
      <Text style={styles.optionText1}>{name}</Text>
      <Text style={styles.optionText2}>{'$' + price}</Text>
    </TouchableOpacity>
  );
  return (
    <>
      <Modal animationType="slide" transparent={true}>
        <View
          style={{
            alignContent: 'center',
            backgroundColor: CUSTOM_COLOR.WhiteSmoke,
            flexDirection: 'row',
            marginTop: scale(77),
          }}>
          {/* back button */}
          <TouchableOpacity
            style={styles.backContainer}
            hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Image source={IMG_back} />
          </TouchableOpacity>
          <></>
          {/* Text box */}
          <TextInput
            style={styles.searchBox}
            keyboardType ={'default'}
            autoFocus={true}
            onChangeText={text =>
              searchText =text
            }
            onEndEditing = {() => APIUtils.find('/product?name='+searchText).then(response => (setData(response.data)))}
            showSoftInputOnFocus ={true}
          />
        </View>
        {/* Search Result */}
        <View style={styles.resultContainer}>
          <Text style={styles.title}>{'Found ' + data.length +  ' results'}</Text>
          <FlatList
            contentContainerStyle={{paddingBottom: scale(120)}}
            data={data}
            renderItem={({item}) => (
              <Item
                name={item.name}
                price={item.price}
                id={data.indexOf(item)}
                image={item.Pic1}
              />
            )}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{marginHorizontal: scale(30),alignSelf:'center'}}
            onEndReachedThreshold={0.5}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Modal>
    </>
  );
};

export default Search;
