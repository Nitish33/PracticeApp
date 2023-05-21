import {useEffect, useState} from 'react';
import {
  Easing,
  runOnJS,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function useAnimated() {
  const animated = useSharedValue(0);

  const [minutes, updateMinute] = useState(0);

  const updateMinAsync = () => {
    updateMinute(m => ++m);
    animated.value = 0;
    runAnimation();
  };

  const runAnimation = () => {
    animated.value = withTiming(
      60,
      {duration: 60 * 1000, easing: Easing.linear},
      () => {
        runOnJS(updateMinAsync)();
      },
    );
  };

  useEffect(() => {
    runAnimation();
  }, []);

  return {animated, minutes};
}
