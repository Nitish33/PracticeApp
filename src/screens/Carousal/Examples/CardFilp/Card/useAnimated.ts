import {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {WINDOW_WIDTH} from '../../../../../utils/Constants';

export default function useAnimated(
  animated: SharedValue<number>,
  index: number,
) {
  const LeftPosition = (index - 1) * WINDOW_WIDTH;
  const CurrPosition = index * WINDOW_WIDTH;
  const RightPosition = (index + 1) * WINDOW_WIDTH;

  const inputRange = [LeftPosition, CurrPosition, RightPosition];

  const animatedStyle = useAnimatedStyle(() => {
    const rotation = interpolate(animated.value, inputRange, [-270, 0, 270]);

    const translation = interpolate(animated.value, inputRange, [
      -WINDOW_WIDTH,
      0,
      WINDOW_WIDTH,
    ]);

    return {
      backfaceVisibility: 'hidden',
      padding: 20,
      transform: [{translateX: translation}, {rotateY: `${rotation}deg`}],
    };
  }, []);

  const imageAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: interpolate(animated.value, inputRange, [20, 0, -20])},
      ],
    };
  }, []);

  return {animatedStyle, imageAnimated};
}
