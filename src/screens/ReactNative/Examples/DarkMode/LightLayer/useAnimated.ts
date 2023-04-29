import {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {WIDTH, HEIGHT} from '../styles';

export default function useAnimated(animated: SharedValue<number>) {
  const cloudAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: interpolate(animated.value, [0, 1], [0, HEIGHT])},
      ],
    };
  }, []);

  const layer1AnimatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(animated.value, [0, 1], [WIDTH - 100, WIDTH]),
    };
  }, []);

  const layer2AnimatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(animated.value, [0, 1], [WIDTH - 70, WIDTH + 200]),
    };
  }, []);

  const layer3AnimatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(animated.value, [0, 1], [WIDTH - 25, WIDTH + 300]),
    };
  }, []);

  return {
    cloudAnimatedStyle,
    layer1AnimatedStyle,
    layer2AnimatedStyle,
    layer3AnimatedStyle,
  };
}
