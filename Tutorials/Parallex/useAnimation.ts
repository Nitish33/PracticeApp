import {View, Text} from 'react-native';
import React from 'react';
import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

export default function useAnimated() {
  const animated = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: ({contentOffset: {x}}) => {
        animated.value = x;
      },
    },
    [],
  );

  return {animated, scrollHandler};
}
