import React from 'react';

import Styles from './styles';
import {WINDOW_WIDTH} from '../../../../../utils/Constants';

import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

export interface IFlipCardProps {
  animated: SharedValue<number>;
}

export default function FlipCard(props: IFlipCardProps) {
  const {animated} = props;

  const rotation = useAnimatedStyle(() => {
    const animatedValue = animated.value % WINDOW_WIDTH;

    const inputRange = [0, WINDOW_WIDTH];
    const outputRange = [0, 180];

    return {
      transform: [
        {perspective: 700},
        {rotateY: `${interpolate(animatedValue, inputRange, outputRange)}deg`},
      ],
    };
  }, []);

  return <Animated.View style={[Styles.containerStyle, rotation]} />;
}
