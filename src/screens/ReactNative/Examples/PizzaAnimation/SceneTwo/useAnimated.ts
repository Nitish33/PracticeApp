import {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../../../../utils/Constants';

export default function useAnimated(scrollAnimated: SharedValue<number>) {
  const inputRange = [0, WINDOW_WIDTH, 2 * WINDOW_WIDTH];

  const pizzaContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(scrollAnimated.value, inputRange, [
            -WINDOW_WIDTH / 2,
            0,
            WINDOW_WIDTH - 100,
          ]),
        },

        {
          translateY: interpolate(scrollAnimated.value, inputRange, [
            -140,
            0,
            -WINDOW_HEIGHT / 2,
          ]),
        },
      ],
    };
  }, []);

  const pizzaContentContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: interpolate(scrollAnimated.value, inputRange, [1.2, 1, 1])},

        {
          rotate: `${interpolate(
            scrollAnimated.value,
            inputRange,
            [-70, 0, 0],
          )}deg`,
        },
      ],
    };
  }, []);

  const pizzaAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(scrollAnimated.value, inputRange, [
            0,
            0,
            -WINDOW_HEIGHT / 2,
          ]),
        },

        {
          rotate: `${interpolate(
            scrollAnimated.value,
            inputRange,
            [0, 0, 360],
          )}deg`,
        },
      ],
    };
  }, []);

  const pizzaSliceAnimatedStyle = useAnimatedStyle(() => {
    return {
      zIndex: 10,
      transform: [
        {
          translateX: interpolate(
            scrollAnimated.value,
            inputRange,
            [-5, -5, 50],
          ),
        },

        {
          translateY: interpolate(scrollAnimated.value, inputRange, [
            -10,
            -10,
            WINDOW_HEIGHT / 2 + 50,
          ]),
        },

        {
          rotate: `${interpolate(
            scrollAnimated.value,
            inputRange,
            [-5, 0, -160],
          )}deg`,
        },
      ],
    };
  }, []);

  return {
    pizzaAnimatedStyle,
    pizzaContainerStyle,
    pizzaContentContainerStyle,
    pizzaSliceAnimatedStyle,
  };
}
