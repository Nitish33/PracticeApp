import {View, Text} from 'react-native';
import React, {useState} from 'react';

import Styles from './styles';
import Animated, {
  interpolate,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

export default function DragAndPress() {
  const expandValue = useSharedValue(0);
  const [isExpanded, setExpanded] = useState(false);

  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      // zIndex: interpolate()

      backgroundColor: 'red',
      width: 100,
      height: 100,
      zIndex: expandValue.value,
      transform: [
        {translateX: offsetX.value},
        {translateY: offsetY.value},
        {scale: interpolate(expandValue.value, [0, 1], [1, 3])},
      ],
    };
  });

  const panHandler = Gesture.Pan()
    .onUpdate(({translationX, translationY}) => {
      offsetX.value = translationX;
      offsetY.value = translationY;
    })
    .onEnd(() => {
      offsetX.value = withSpring(0);
      offsetY.value = withSpring(0);
    });

  const toggleExpanded = (expanded: boolean) => {
    setExpanded(expanded);
  };

  const longPressHandler = Gesture.LongPress()
    .onStart(() => {
      expandValue.value = withSpring(1);

      runOnJS(toggleExpanded)(true);
    })
    .onEnd(() => {
      expandValue.value = withSpring(0);
      runOnJS(toggleExpanded)(false);
    });

  const gesture = Gesture.Race(panHandler, longPressHandler);

  return (
    <View style={Styles.containerStyle}>
      <GestureDetector gesture={gesture}>
        <Animated.View
          style={[
            {justifyContent: 'center', alignItems: 'center'},
            animatedStyle,
          ]}>
          <Text style={{color: 'white'}}>Nitish</Text>
        </Animated.View>
      </GestureDetector>

      <Text>{'Drag to move the box. \nPress and hold to expand the box'}</Text>
    </View>
  );
}
