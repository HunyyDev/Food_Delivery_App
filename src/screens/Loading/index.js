import React, {useEffect, useRef} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  View,
  Image,
  Text,
  Animated,
} from 'react-native';
import styles from './styles';
import {IMG_LogoTitle, IMG_ZT} from '../../assets/images';

const Loading = () => {
  const Rotate = useRef(new Animated.Value(0)).current;
  useEffect(
    Animated.loop(
      Animated.timing(Rotate, {
        toValue: 360,
        duration: 1500,
        useNativeDriver: true,
      }),
    ).start,
    [Rotate],
  );

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={IMG_ZT}
        resizeMode={'cover'}
        style={styles.backGround}>
        <View style={styles.circle}>
          <Image
            source={IMG_LogoTitle}
            resizeMode={'contain'}
            style={styles.logo}></Image>
          <Text style={styles.title}> {'Food for everyone'}</Text>
          <View style={styles.ellipse}>
            <Animated.View
              style={[
                styles.vector,
                {
                  transform: [
                    {
                      rotate: Rotate.interpolate({
                        inputRange: [0, 360],
                        outputRange: ['0deg', '360deg'],
                      }),
                    },
                  ],
                },
              ]}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Loading;
