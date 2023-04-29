import {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function useAnimated() {
  const animated = useSharedValue(0);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(
            animated.value,
            [0, 5],
            [1, 0.1],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, []);

  const animatedContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(animated.value, [0, 5], [1, 2]),
        },
      ],
    };
  }, []);

  return {animated, imageAnimatedStyle, animatedContainerStyle};
}
