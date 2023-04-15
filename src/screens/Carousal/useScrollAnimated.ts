import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

export default function useScrollAnimated() {
  const animated = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(
    {
      onScroll: ({contentOffset: {x}}) => {
        animated.value = x;
      },
    },
    [],
  );

  return {animated, scrollHandler};
}
