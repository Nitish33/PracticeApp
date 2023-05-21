import React from 'react';
import {G, Path, Svg} from 'react-native-svg';
import Animated, {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedProps,
} from 'react-native-reanimated';

import {CLOCK_SIZE} from '../constants';

const AnimatedG = Animated.createAnimatedComponent(G);

export interface IIntervalIndicatorProps {
  path: string;
}

export default function IntervalIndicator(props: IIntervalIndicatorProps) {
  const {path} = props;

  return (
    <Svg width={CLOCK_SIZE} height={CLOCK_SIZE}>
      <AnimatedG>
        <Path d={path} stroke={'white'} />
      </AnimatedG>
    </Svg>
  );
}
