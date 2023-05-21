import Svg from 'react-native-svg';
import React, {useMemo} from 'react';

import Styles from '../styles';
import Intervals from '../Intervals';
import useAnimated from './useAnimated';
import {getIndicatorPath} from '../../utils';
import {C, CLOCK_SIZE} from '../../constants';
import IntervalIndicator from '../IntervalIndicator';

import Animated, {
  SharedValue,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';

export interface ISecondIntervalProps {
  animated: SharedValue<number>;
}

export default function SecondInterval(props: ISecondIntervalProps) {
  const {animated} = props;

  const {secondViewAnimatedStyle} = useAnimated(animated);

  const path = useMemo(() => {
    return getIndicatorPath(C, 7);
  }, []);

  const rotationAngle = useDerivedValue(() => {
    return interpolate(animated.value, [0, 60], [0, 360]);
  }, []);

  return (
    <Animated.View style={[Styles.indicatorStyle, secondViewAnimatedStyle]}>
      <Svg width={CLOCK_SIZE} height={CLOCK_SIZE}>
        <IntervalIndicator path={path} />
      </Svg>

      <Intervals length={C} animation={rotationAngle} />
    </Animated.View>
  );
}
