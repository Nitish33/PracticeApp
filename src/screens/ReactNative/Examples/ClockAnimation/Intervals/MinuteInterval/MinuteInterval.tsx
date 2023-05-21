import Svg from 'react-native-svg';
import React, {useMemo} from 'react';

import Styles from '../styles';
import Intervals from '../Intervals';
import useAnimated from './useAnimated';
import {CLOCK_SIZE} from '../../constants';
import {getIndicatorPath} from '../../utils';
import IntervalIndicator from '../IntervalIndicator';

import Animated, {
  SharedValue,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';

const C = CLOCK_SIZE / 2;
const MinuteFace = C - 50;

export interface IMinuteIntervalProps {
  animated: SharedValue<number>;
  minutes: number;
}

export default function MinuteInterval(props: IMinuteIntervalProps) {
  const {animated, minutes} = props;

  const {minViewAnimatedStyle} = useAnimated(animated, minutes);

  const path2 = useMemo(() => {
    return getIndicatorPath(MinuteFace, 7);
  }, []);

  const rotationAngle = useDerivedValue(() => {
    const sAngle = 6 * minutes;
    return interpolate(animated.value, [0, 60], [sAngle, sAngle + 6]);
  }, [minutes]);

  return (
    <Animated.View style={[Styles.indicatorStyle, minViewAnimatedStyle]}>
      <Svg width={CLOCK_SIZE} height={CLOCK_SIZE}>
        <IntervalIndicator path={path2} />
      </Svg>

      <Intervals length={C - 50} animation={rotationAngle} />
    </Animated.View>
  );
}
