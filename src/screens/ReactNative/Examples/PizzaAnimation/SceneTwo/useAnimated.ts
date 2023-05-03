import {
  Easing,
  Extrapolate,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../../../../utils/Constants';
import {useEffect} from 'react';

export default function useAnimated(scrollAnimated: SharedValue<number>) {
  const inputRange = [0, WINDOW_WIDTH, 2 * WINDOW_WIDTH];

  const coffeeAnimated = useSharedValue(0);

  useEffect(() => {
    coffeeAnimated.value = withRepeat(
      withTiming(1, {duration: 10000, easing: Easing.linear}),
      -1,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const coffeeAnimatedStyle = useAnimatedStyle(() => {
    const rotation = interpolate(coffeeAnimated.value, [0, 1], [0, 360]);
    return {
      transform: [{rotate: `${rotation}deg`}],
    };
  }, []);

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
            [-5, -5, 40],
          ),
        },

        {
          translateY: interpolate(scrollAnimated.value, inputRange, [
            -10,
            -10,
            WINDOW_HEIGHT / 2 - 50,
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

  const coffeeCupAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(scrollAnimated.value, inputRange, [
            0,
            10,
            WINDOW_HEIGHT / 2,
          ]),
        },

        {
          translateX: interpolate(
            scrollAnimated.value,
            [WINDOW_WIDTH, 1.5 * WINDOW_WIDTH, 2 * WINDOW_WIDTH],
            [0, 1.5 * WINDOW_WIDTH, WINDOW_WIDTH],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, []);

  const noodleAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(scrollAnimated.value, inputRange, [
            0,
            WINDOW_WIDTH - 100,
            WINDOW_WIDTH,
          ]),
        },

        {
          rotate: `${interpolate(
            scrollAnimated.value,
            inputRange,
            [0, 50, 0],
          )}deg`,
        },
      ],
    };
  });

  return {
    noodleAnimatedStyle,
    coffeeCupAnimatedStyle,
    pizzaAnimatedStyle,
    coffeeAnimatedStyle,
    pizzaContainerStyle,
    pizzaContentContainerStyle,
    pizzaSliceAnimatedStyle,
  };
}
