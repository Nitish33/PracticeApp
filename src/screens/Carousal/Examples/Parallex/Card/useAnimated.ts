import {
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {CARD_WIDTH, WINDOW_WIDTH} from '../styles';

export default function useAnimated(
  index: number,
  animated: SharedValue<number>,
) {
  const PreviewCardPosition = (index - 1) * WINDOW_WIDTH;
  const CurrentCardPosition = index * WINDOW_WIDTH;
  const NextCardPosition = (index + 1) * WINDOW_WIDTH;

  const imageTranslation = -(
    CurrentCardPosition +
    (WINDOW_WIDTH - CARD_WIDTH) / 2
  );

  const imageAnimatedStyle = useAnimatedStyle(() => {
    const inputRange = [
      PreviewCardPosition,
      CurrentCardPosition,
      NextCardPosition,
    ];

    const outputRange = [-WINDOW_WIDTH / 2, 0, WINDOW_WIDTH / 2];

    return {
      transform: [
        {
          translateX:
            imageTranslation -
            interpolate(
              animated.value,
              inputRange,
              outputRange,
              Extrapolate.CLAMP,
            ),
        },
      ],
    };
  }, []);

  return {imageAnimatedStyle};
}
