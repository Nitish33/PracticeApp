import {useEffect} from 'react';

import {
  Easing,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {Data, MAX_DURATION} from './PopularityData';

export default function useAnimated() {
  const yearAnimated = useSharedValue(0);
  const parentWidthAnimated = useSharedValue(0);

  const animatedIndex = useDerivedValue(() => {
    return Data[Math.round(yearAnimated.value)];
  });

  const monthAndYear = useDerivedValue(() => {
    return `${animatedIndex.value.month}/${animatedIndex.value.year}`;
  });

  const startAnimation = () => {
    yearAnimated.value = withRepeat(
      withTiming(MAX_DURATION, {
        duration: MAX_DURATION * 2000,
        easing: Easing.linear,
      }),
    );
  };

  return {
    monthAndYear,
    yearAnimated,
    startAnimation,
    parentWidthAnimated,
    animatedIndex,
  };
}
