import {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../../../../utils/Constants';

export default function useAnimated(scrollAnimated: SharedValue<number>) {
  const inputRange = [0, WINDOW_WIDTH, 2 * WINDOW_WIDTH];

  const tableAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(scrollAnimated.value, inputRange, [
            -2 * WINDOW_WIDTH,
            -WINDOW_WIDTH - 50,
            -100,
          ]),
        },
      ],
    };
  }, []);

  const contentContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(scrollAnimated.value, inputRange, [
            0,
            -WINDOW_WIDTH,
            0,
          ]),
        },
      ],
    };
  }, []);

  const coffeeContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollAnimated.value, inputRange, [0, 0, 1]),

      transform: [
        {
          translateX: interpolate(
            scrollAnimated.value,
            inputRange,
            [-200, -200, 0],
          ),
        },

        {
          translateY: interpolate(scrollAnimated.value, inputRange, [
            WINDOW_HEIGHT / 2,
            WINDOW_HEIGHT / 2,
            0,
          ]),
        },
      ],
    };
  }, []);

  const plateAnimatdStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(scrollAnimated.value, inputRange, [
            WINDOW_WIDTH,
            WINDOW_WIDTH,
            0,
          ]),
        },

        {
          translateY: interpolate(
            scrollAnimated.value,
            inputRange,
            [200, 200, -100],
          ),
        },

        {
          rotate: `${interpolate(
            scrollAnimated.value,
            inputRange,
            [180, 180, 0],
          )}deg`,
        },
      ],
    };
  }, []);

  return {
    tableAnimatedStyle,
    plateAnimatdStyle,
    contentContainerAnimatedStyle,
    coffeeContainerAnimatedStyle,
  };
}
