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

  useEffect(() => {
    yearAnimated.value = withRepeat(
      withTiming(MAX_DURATION, {
        duration: MAX_DURATION * 2000,
        easing: Easing.linear,
      }),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    yearAnimated,
    parentWidthAnimated,
    animatedIndex,
  };
}
