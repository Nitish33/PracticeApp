import {WIDTH, HEIGHT} from '../styles';

import {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function useAnimated(animated: SharedValue<number>) {
  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      width: '100%',
      height: '100%',
      flexDirection: 'row-reverse',
      opacity: interpolate(animated.value, [0, 0.5, 1], [0, 0, 1]),
      transform: [
        {translateX: interpolate(animated.value, [0, 1], [-WIDTH / 2, 0])},
      ],
    };
  }, []);

  const starAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: interpolate(animated.value, [0, 1], [-HEIGHT, 0])},
      ],
    };
  });

  const layer1AnimatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(animated.value, [0, 1], [WIDTH, WIDTH - 100]),
    };
  }, []);

  const layer2AnimatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(animated.value, [0, 1], [2 * WIDTH, WIDTH - 75]),
    };
  }, []);

  const layer3AnimatedStyle = useAnimatedStyle(() => {
    return {
      width: interpolate(animated.value, [0, 1], [1.5 * WIDTH, WIDTH - 50]),
    };
  }, []);

  return {
    containerAnimatedStyle,
    starAnimatedStyle,
    layer1AnimatedStyle,
    layer2AnimatedStyle,
    layer3AnimatedStyle,
  };
}
