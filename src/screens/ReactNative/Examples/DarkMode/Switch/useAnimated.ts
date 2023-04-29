import {View, Text} from 'react-native';
import React from 'react';

import {Size} from './styles';
import {WIDTH} from '../styles';
import {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function useAnimated(animated: SharedValue<number>) {
  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            animated.value,
            [0, 1],
            [0, WIDTH - Size - 10],
          ),
        },
      ],
    };
  }, []);

  const moonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            animated.value,
            [0.3, 1],
            [Size, 0],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, []);

  return {containerAnimatedStyle, moonAnimatedStyle};
}
