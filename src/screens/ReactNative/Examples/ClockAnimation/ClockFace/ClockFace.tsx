import {View} from 'react-native';
import React, {useMemo} from 'react';
import {SharedValue} from 'react-native-reanimated';
import Svg, {Circle, Path, Text} from 'react-native-svg';

import Styles from './styles';
import {CLOCK_SIZE} from '../constants';
import MinuteInterval from '../Intervals/MinuteInterval/MinuteInterval';
import SecondInterval from '../Intervals/SecondInterval/SecondInterval';

const CENTER = CLOCK_SIZE / 2;
const C = CENTER;

const MinuteFace = C - 50;

interface IClockFaceProps {
  minutes: number;
  animated: SharedValue<number>;
}

export default function ClockFace(props: IClockFaceProps) {
  const {animated, minutes} = props;

  const timePath = useMemo(() => {
    const Height = 35;
    const h = Height / 2;

    return [
      // move to the end of the face
      `M${2 * C} ${C - h}`,

      // Draw a line to the minute
      `h-${MinuteFace - h + 5}`,

      // Draw uper half curve, x1, y1, x2, y2, x,y
      `c -${h} 0 -${h} ${h} -${h} ${h}`,

      // draw lower half curve
      `c 0 ${h} ${h} ${h} ${h} ${h}`,

      // Draw line back to face end
      `h${MinuteFace - h + 5}`,
    ].join(' ');
  }, []);

  return (
    <View style={Styles.containerStyle}>
      <Svg width={CLOCK_SIZE} height={CLOCK_SIZE}>
        <Svg>
          <Circle cx={CLOCK_SIZE / 2} cy={CLOCK_SIZE / 2} r={CLOCK_SIZE / 2} />

          <Circle
            cx={CLOCK_SIZE / 2}
            cy={CLOCK_SIZE / 2}
            r={MinuteFace}
            stroke={'white'}
          />
        </Svg>

        <Text
          fill="white"
          stroke="white"
          strokeWidth={1}
          fontWeight="bold"
          fontSize="50"
          textAnchor="middle"
          x={C}
          y={C + 20}>
          10
        </Text>

        <Path
          stroke={'white'}
          strokeWidth={2}
          d={timePath}
          fill={'transparent'}
        />
      </Svg>

      <SecondInterval animated={animated} />

      <MinuteInterval animated={animated} minutes={minutes} />
    </View>
  );
}
