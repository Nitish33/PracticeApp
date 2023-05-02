import {useEffect} from 'react';
import {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export default function useAnimated() {
  const coffeeAnimated = useSharedValue(0);

  useEffect(() => {
    coffeeAnimated.value = withRepeat(
      withTiming(1, {duration: 10000, easing: Easing.linear}),
      -1,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const coffeeAnimatedStyle = useAnimatedStyle(() => {
    const rotation = interpolate(coffeeAnimated.value, [0, 1], [0, 360]);
    return {
      transform: [{rotate: `${rotation}deg`}],
    };
  }, []);

  return {coffeeAnimatedStyle};
}
