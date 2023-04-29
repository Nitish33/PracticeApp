import {View, Text} from 'react-native';
import React from 'react';
import {useAnimatedProps, useSharedValue} from 'react-native-reanimated';
import {SvgProps} from 'react-native-svg';

import {Radius, Stroke, Circumference} from './styles';

export default function useAnimated() {
  const animated = useSharedValue(0);

  const animatedProps = useAnimatedProps(() => {
    return {
      strokeDasharray: [
        Circumference * animated.value,
        Circumference * (1 - animated.value),
      ],
    };
  }, []);

  return {animated, animatedProps};
}
