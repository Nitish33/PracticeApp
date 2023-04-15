import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {CARD_HEIGHT, CARD_WIDTH} from './styles';
import {Gesture} from 'react-native-gesture-handler';

export default function useAnimated() {
  const animated = useSharedValue(CARD_WIDTH / 2);
  const thumbYPosition = useSharedValue(CARD_HEIGHT / 2);

  const previousPosition = useSharedValue(animated.value);
  const previousThumbPosition = useSharedValue(thumbYPosition.value);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      previousPosition.value = animated.value;
      previousThumbPosition.value = thumbYPosition.value;
    })
    .onUpdate(({translationY, translationX}) => {
      const newXPosition = previousPosition.value + translationX;
      const newYPosition = previousThumbPosition.value + translationY;

      animated.value =
        newXPosition > 0 && newXPosition < CARD_WIDTH
          ? newXPosition
          : animated.value;

      thumbYPosition.value =
        newYPosition > 0 && newYPosition < CARD_HEIGHT
          ? newYPosition
          : thumbYPosition.value;
    });

  const sliderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: animated.value - 15},
        {translateY: thumbYPosition.value - 25},
      ],
    };
  }, []);

  const rightImageAnimatedStyle = useAnimatedStyle(() => {
    return {
      overflow: 'hidden',
      transform: [
        {
          translateX: interpolate(
            animated.value,
            [0, CARD_WIDTH],
            [-CARD_WIDTH, 0],
          ),
        },
      ],
    };
  }, []);

  const imageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            animated.value,
            [0, CARD_WIDTH],
            [0, -CARD_WIDTH],
          ),
        },
      ],
    };
  }, []);

  return {imageStyle, rightImageAnimatedStyle, sliderStyle, gesture};
}
