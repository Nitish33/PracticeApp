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
        {
          translateX: interpolate(scrollAnimated.value, inputRange, [
            0,
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
        {
          translateX: interpolate(scrollAnimated.value, inputRange, [0, 50]),
        },
        {
          rotateZ: `${interpolate(
            scrollAnimated.value,
            inputRange,
            [0, 70],
          )}deg`,
        },
      ],
    };
  }, []);

  return {momosAnimatedStyle, fruitsAnimatedStyle, dryFruitsAnimatedStyle};
}
