import {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function useAnimated() {
  const animated = useSharedValue(0);
  const gestureHandler = useAnimatedScrollHandler(
    {
      onScroll(event) {
        animated.value = event.contentOffset.x;
      },
    },
    [],
  );

  const animationContainerStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animated.value}],
    };
  }, []);

  return {animated, gestureHandler, animationContainerStyle};
}
