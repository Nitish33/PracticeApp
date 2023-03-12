import React from 'react';
import {View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import Styles from './styles';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function DragAndDrop() {
  const start = useSharedValue({x: 0, y: 0});
  const offset = useSharedValue({x: 0, y: 0});

  const gesture = Gesture.Pan()
    .onUpdate(event => {
      offset.value = {
        x: start.value.x + event.translationX,
        y: start.value.y + event.translationY,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    });

  const boxAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: 100,
      height: 100,
      borderRadius: 100,
      backgroundColor: 'red',
      transform: [{translateX: offset.value.x}, {translateY: offset.value.y}],
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
