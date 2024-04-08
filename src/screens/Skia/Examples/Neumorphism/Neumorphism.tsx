import {View, Text} from 'react-native';
import React, {useEffect} from 'react';

import {
  Shadow,
  Fill,
  RoundedRect,
  Canvas,
  Blur,
  Mask,
  BlurMask,
} from '@shopify/react-native-skia';
import {
  Easing,
  interpolate,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function Neumorphism() {
  const animated = useSharedValue(0);

  useEffect(() => {
    animated.value = withRepeat(
      withTiming(1, {duration: 3000, easing: Easing.linear}),
      -1,
    );
  }, []);

  const xValue = useDerivedValue(() => {
    return interpolate(
      animated.value,
      [0, 0.25, 0.5, 0.75, 1],
      [-12, 12, 12, -12, -12],
    );
  });

  const yValue = useDerivedValue(() => {
    return interpolate(
      animated.value,
      [0, 0.25, 0.5, 0.75, 1],
      [-12, -12, 12, 12, -12],
    );
  });

  const nxValue = useDerivedValue(() => {
    return interpolate(
      animated.value,
      [0, 0.25, 0.5, 0.75, 1],
      [12, -12, -12, 12, 12],
    );
  });

  const nyValue = useDerivedValue(() => {
    return interpolate(
      animated.value,
      [0, 0.25, 0.5, 0.75, 1],
      [12, 12, -12, -12, 12],
    );
  });

  const blur = useDerivedValue(() => {
    return interpolate(animated.value, [0, 1], [0, 5]);
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
      }}>
      <Canvas style={{width: 250, height: 250}}>
        <Fill color="lightblue" />
        <RoundedRect
          x={25}
          y={25}
          width={192}
          height={192}
          r={32}
          color="lightblue">
          <Shadow dx={xValue} dy={yValue} blur={5} color="#93b8c4" />
          <Shadow dx={nxValue} dy={nyValue} blur={5} color="#c7f8ff" />

          <BlurMask blur={blur} style={'inner'} />
        </RoundedRect>
      </Canvas>
    </View>
  );
}
