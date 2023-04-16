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
  const previousCar = (index - 1) * WINDOW_WIDTH;
  const currentCar = index * WINDOW_WIDTH;
  const nextCar = (index + 1) * WINDOW_WIDTH;

  const inputRange = [previousCar, currentCar, nextCar];

  const carImageStyle = useAnimatedStyle(() => {
    return {
      height: '100%',
      width: '200%',
      position: 'absolute',
      left: 0,
      top: 0,
      resizeMode: 'contain',
      opacity: interpolate(animated.value, inputRange, [0, 1, 0]),

      transform: [
        {translateY: -100},

        {
          translateX: interpolate(animated.value, inputRange, [
            WINDOW_WIDTH,
            0,
            -WINDOW_WIDTH,
          ]),
        },
      ],
    };
  }, []);

  const infoContainerAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(animated.value, inputRange, [0, 1, 0]),
      // transform: [
      //   {
      //     translateX: interpolate(
      //       animated.value,
      //       inputRange,
      //       [-WINDOW_WIDTH, 0, WINDOW_WIDTH],
      //       Extrapolate.CLAMP,
      //     ),
      //   },
      // ],
    };
  }, []);

  const valueAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateX: `${interpolate(
            animated.value,
            inputRange,
            [90, 0, -90],
          )}deg`,
        },
      ],
      opacity: interpolate(animated.value, inputRange, [0, 1, 0]),
    };
  }, []);

  return {carImageStyle, infoContainerAnimatedStyle, valueAnimatedStyle};
}
