import React from 'react';
import {View, Button} from 'react-native';
import {Circle, Svg} from 'react-native-svg';
import Animated, {withTiming} from 'react-native-reanimated';

import useAnimated from './useAnimated';
import Styles, {Circumference, Radius, Stroke} from './styles';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function ProgressBar() {
  const {animated, animatedProps} = useAnimated();

  return (
    <View style={Styles.containerStyle}>
      <Svg style={{width: 2 * Radius + Stroke, aspectRatio: 1}}>
        <AnimatedCircle
          cx={Radius + Stroke / 2}
          cy={Radius + Stroke / 2}
          r={Radius}
          stroke={'red'}
          strokeWidth={Stroke}
          fill={'transparent'}
          strokeLinecap="round"
          strokeDashoffset={Circumference / 2}
          animatedProps={animatedProps}
        />
      </Svg>

      <Button
        title="Increase"
        onPress={() => {
          animated.value = withTiming(1, {duration: 5000});
        }}
      />

      <Button
        title="Decrease"
        onPress={() => {
          animated.value = withTiming(0, {duration: 5000});
        }}
      />
    </View>
  );
}
