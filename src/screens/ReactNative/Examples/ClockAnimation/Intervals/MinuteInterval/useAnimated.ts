import {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function useAnimated(
  animated: SharedValue<number>,
  minutes: number,
) {
  const minViewAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${
            6 * minutes + interpolate(animated.value, [0, 60], [0, 6])
          }deg`,
        },
      ],
    };
  }, [minutes]);

  return {minViewAnimatedStyle};
}
