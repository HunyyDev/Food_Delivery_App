import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import scale from '../../../constants/responsive';
import CUSTOM_COLOR from '../../../constants/colors';
import {IMG_Scroll1, IMG_Scroll2, IMG_back, IMG_Tym} from '../../../assets/images';
import styles from './styles';


const ProductDetail = props => {
  const detail = props.route.params;
  const data = [
    {source: detail.Pic1, id: 0},
    {source: detail.Pic2, id: 1},
    {source: detail.Pic3, id: 2},
  ];
  const {navigation} = props;
  const onBack = () => {
    navigation.goBack();
  };
  const [dotActive, setDotActive] = useState(0);
  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.round(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== dotActive) {
        setDotActive(slide);
      }
      console.log(nativeEvent.contentOffset.x);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Image source={IMG_back} style={styles.iconBack} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.HeartButton}>
          <Image source={IMG_Tym} style={styles.iconBack} />
        </TouchableOpacity>
      </View>
      <View style={styles.wrap}>
        <ScrollView
          onScrollEndDrag={({nativeEvent}) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal>
          {data.map(item => (
            <View style={styles.imageFood}>
              <Image
                key={item.index}
                resizeMode="cover"
                style={styles.food}
                source={{uri: item.source}}
              />
            </View>
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {data.map(item => (
            <Text
              key={item.id}
              style={{
                color:
                  dotActive === item.id
                    ? CUSTOM_COLOR.SunsetOrange
                    : CUSTOM_COLOR.Black,
                padding: scale(1),
              }}>
              ●
            </Text>
          ))}
        </View>
      </View>
      <View>
        <View style={styles.backgroundName}>
          <Text style={styles.textFoodContainer}>{detail.name}</Text>
        </View>
        <View style={styles.backgroundPrice}>
          <Text style={styles.textPriceContainer}>{'$'+detail.price}</Text>
        </View>
      </View>
      <View style={styles.backgroundInfo}>
        <Text style={styles.division}>Delivery info</Text>
        <Text style={styles.content}>
          {'Delivered between monday aug and thursday 20 from 8pm to 91:32 pm.'}
        </Text>
        <Text style={styles.division}>Return policy</Text>
        <Text style={styles.content}>
          {
            'All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.'
          }
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('CartScreen')}
          style={styles.buttonSelection}>
          <Text style={styles.SelectionText}>{'Add to cart'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;
