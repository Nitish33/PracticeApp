import {Text} from 'react-native';
import React, {useMemo} from 'react';
import Animated, {SharedValue, useAnimatedStyle} from 'react-native-reanimated';

import Styles from './styles';
import {degToRadian} from '../utils';
import {CLOCK_SIZE} from '../constants';

export interface IIntervalTextProps {
  value: string;
  fontSize: number;
  length: number;
  index: number;
  rotationAngle: SharedValue<number>;
}

const C = CLOCK_SIZE / 2;

const AnimatedText = Animated.createAnimatedComponent(Text);

export default function IntervalText(props: IIntervalTextProps) {
  const {length, value, index, rotationAngle} = props;

  const position = degToRadian(index * 30);

  const positionStyle = useMemo(() => {
    return {
      left: Math.floor(C + (length - 30) * Math.cos(position) - 10),
      top: Math.floor(C + (length - 30) * +Math.sin(position) - 10),
    };
  }, [position, length]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${-rotationAngle.value}deg`}],
    };
  }, []);

  return (
    <AnimatedText style={[Styles.textStyle, positionStyle, animatedStyle]}>
      {value}
    </AnimatedText>
  );
}
