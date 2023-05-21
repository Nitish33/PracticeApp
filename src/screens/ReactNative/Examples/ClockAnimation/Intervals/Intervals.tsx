import React, {useMemo} from 'react';

import {CLOCK_SIZE} from '../constants';
import {SharedValue} from 'react-native-reanimated';
import IntervalText from './IntervalText';

const C = CLOCK_SIZE / 2;

export interface IIntervalsProps {
  length: number;
  fontSize?: number;
  animation: SharedValue<number>;
}

export default function Intervals(props: IIntervalsProps) {
  const {length = C, fontSize = 16, animation} = props;

  const arr = useMemo(() => {
    return [
      '05', // 0, 1, 2,
      '10', // 1, 2, 3
      '15',
      '20',
      '25',
      '30',
      '35',
      '40',
      '45',
      '50',
      '55',
      '00', // 0,
    ].reverse();
  }, []);

  return (
    <>
      {arr.map((value, index) => {
        return (
          <IntervalText
            key={value}
            index={index}
            value={value}
            length={length}
            fontSize={fontSize}
            rotationAngle={animation}
          />
        );
      })}
    </>
  );
}
