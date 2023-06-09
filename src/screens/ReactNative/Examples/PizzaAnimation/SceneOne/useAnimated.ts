import {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {WINDOW_WIDTH} from '../../../../../utils/Constants';

export default function useAnimated(scrollAnimated: SharedValue<number>) {
  const inputRange = [0, WINDOW_WIDTH];

  const momosAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: 0.75},
        {
          translateX: interpolate(scrollAnimated.value, inputRange, [
            -50,
            WINDOW_WIDTH / 4,
          ]),
        },
        {translateY: interpolate(scrollAnimated.value, inputRange, [0, 0])},
        {
          rotateZ: `${interpolate(
            scrollAnimated.value,
            inputRange,
            [0, 180],
          )}deg`,
        },
      ],
    };
  }, []);

  const fruitsAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: 1.1},
        {
          rotateZ: `${interpolate(
            scrollAnimated.value,
            inputRange,
            [0, 180],
          )}deg`,
        },
      ],
    };
  }, []);

  const dryFruitsAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: 1.2},
        {
          translateX: interpolate(scrollAnimated.value, inputRange, [0, 50]),
        },
        {
          rotateZ: `${interpolate(
            scrollAnimated.value,
            inputRange,
            [50, 120],
          )}deg`,
        },
      ],
    };
  }, []);

  return {momosAnimatedStyle, fruitsAnimatedStyle, dryFruitsAnimatedStyle};
}
