import React from 'react';
import {View} from 'react-native';

import Styles from './styles';
import useAnimated from './useAnimated';
import ClockFace from './ClockFace/ClockFace';

export default function ClockAnimation() {
  const {animated, minutes} = useAnimated();

  return (
    <View style={Styles.containerStyle}>
      <ClockFace animated={animated} minutes={minutes} />
    </View>
  );
}
