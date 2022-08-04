import React, {useRef} from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {View} from 'react-native';
const CartCard = props => {
  const translationX = useRef(new Animated.Value(0)).current;
  const maxDistLeft =
    props.slideLeftRestriction == true
      ? 0
      : props.maxDist == undefined
      ? Number.NEGATIVE_INFINITY
      : -props.maxDist;
  const maxDistRight =
    props.slideRightRestriction == true
      ? 0
      : props.maxDist == undefined
      ? Number.POSITIVE_INFINITY
      : props.maxDist;
  var preTranslationX = 0;
  var dist = 0;
  const onPanEvent = e => {
    if (
      maxDistLeft <= dist + e.nativeEvent.translationX - preTranslationX &&
      dist + e.nativeEvent.translationX - preTranslationX <= maxDistRight
    ) {
      translationX.setValue(
        Animated.add(
          e.nativeEvent.translationX === 0
            ? 0
            : e.nativeEvent.translationX - preTranslationX,
          translationX,
        ),
      );
      dist +=
        e.nativeEvent.translationX === 0
          ? 0
          : e.nativeEvent.translationX - preTranslationX;
    } else {
      if (dist + e.nativeEvent.translationX - preTranslationX < 0) {
        translationX.setValue(maxDistLeft);
        dist = maxDistLeft;
      } else {
        translationX.setValue(maxDistRight);
        dist = maxDistRight;
      }
    }
    preTranslationX = e.nativeEvent.translationX;
  };
  return (
    <View style={props.style}>
      <View
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}>
          {props.hiddenItem}
        </View>
      <GestureHandlerRootView>
        <PanGestureHandler
          onGestureEvent={e => onPanEvent(e)}>
          <Animated.View style={[{transform: [{translateX: translationX}]}]}>
            {props.slider}
          </Animated.View>
        </PanGestureHandler>
      </GestureHandlerRootView>
    </View>
  );
};
export default CartCard;
