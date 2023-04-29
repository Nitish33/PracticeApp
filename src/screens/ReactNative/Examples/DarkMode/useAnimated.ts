import {useRef} from 'react';
import {useSharedValue, withTiming} from 'react-native-reanimated';

const Duration = 1500;

export default function useAnimated() {
  const valueRef = useRef(false);
  const animated = useSharedValue(Number(valueRef.current));

  const toggle = () => {
    valueRef.current = !valueRef.current;

    if (valueRef.current === false) {
      animated.value = withTiming(0, {duration: Duration});
    } else {
      animated.value = withTiming(1, {duration: Duration});
    }
  };

  return {animated, toggle};
}
