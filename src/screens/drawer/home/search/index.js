import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  Text,
  View,
} from 'react-native';
import styles from './styles';
import {IMG_back} from '../../../../assets/images';
import {TextInput} from 'react-native-gesture-handler';
import CUSTOM_COLOR from '../../../../constants/colors';
import {IMG_Scroll1, IMG_Scroll2} from '../../../../assets/images';
import scale from '../../../../constants/responsive';

const Search = props => {
  const data = [
    {
      id: 1,
      name: 'Veggie \ntomato mix',
      price: 'N1,900',
      image: IMG_Scroll1,
    },
    {
      id: 2,
      name: 'Spicy fish\n sauce',
      price: 'N2,300,99',
      image: IMG_Scroll2,
    },
    {
      id: 3,
      name: 'Item 3',
      price: '123',
      image: IMG_Scroll1,
    },
    {
      id: 4,
      name: 'Item 4',
      price: '456',
      image: IMG_Scroll1,
    },
    {
      id: 5,
      name: 'Item 5',
      price: '123',
      image: IMG_Scroll1,
    },
    {
      id: 6,
      name: 'Item 6',
      price: '456',
      image: IMG_Scroll1,
    },
  ];
  const Item = ({name, price, id, image}) => (
    <TouchableOpacity
      style={[
        styles.option,
        id % 2 == 0 ? {top: scale(90)} : {top: scale(0)},
      ]}>
      <Image source={image} style={styles.imageOption} />
      <Text style={styles.optionText1}>{name}</Text>
      <Text style={styles.optionText2}>{price}</Text>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <></>
      <View
        style={{
          alignContent: 'center',
          backgroundColor: CUSTOM_COLOR.Gallery,
          flexDirection: 'row',
        }}>
        {/* back button */}
        <TouchableOpacity
          style={styles.backContainer}
          hitSlop={{top: 10, bottom: 10, left: 10, right: 10}}
          onPress={() => {
            console.log(this.props);
            props.navigation.goBack();
          }}>
          <Image source={IMG_back} />
        </TouchableOpacity>
        <></>
        {/* Text box */}
        <TextInput style={styles.searchBox} />
      </View>
      {/* Search Result */}
      <View style={styles.resultContainer}>
        <Text style={styles.title}>{'Found 6 results'}</Text>
        <FlatList
          contentContainerStyle={{paddingBottom: scale(120)}}
          data={data}
          renderItem={({item}) => (
            <Item name={item.name} price={item.price} id={item.id} image={item.image} />
          )}
          keyExtractor={item => item.id}
          numColumns={2}
          columnWrapperStyle={{marginHorizontal: scale(30)}}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
