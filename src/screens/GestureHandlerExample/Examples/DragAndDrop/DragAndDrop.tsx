import React from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import Styles from './styles';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export default function DragAndDrop() {
  const offset = useSharedValue({x: 0, y: 0});

  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onUpdate(event => {
      offset.value = {
        x: event.translationX,
        y: event.translationY,
      };

      offsetX.value = event.translationX;
      offsetY.value = event.translationY;
    })
    .onEnd(() => {
      offsetX.value = withSpring(0);
      offsetY.value = withSpring(0);

      offset.value = {x: 0, y: 0};
    });

  const boxAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: 100,
      height: 100,
      borderRadius: 100,
      backgroundColor: 'red',
      transform: [{translateX: offsetX.value}, {translateY: offsetY.value}],
    };
  }, []);

  return (
    <View style={Styles.containerStyle}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={boxAnimatedStyle} />
      </GestureDetector>
    </View>
  );
}
