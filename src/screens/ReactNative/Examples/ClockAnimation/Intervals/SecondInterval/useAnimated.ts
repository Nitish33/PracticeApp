import {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function useAnimated(animated: SharedValue<number>) {
  const secondViewAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {rotate: `${interpolate(animated.value, [0, 60], [0, 360])}deg`},
      ],
    };
  }, []);

  return {secondViewAnimatedStyle};
}
