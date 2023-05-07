import {
  SharedValue,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {Data, LanguageOption, Colors} from '../PopularityData';

export default function useAnimated(
  animated: SharedValue<number>,
  language: LanguageOption,
) {
  const rating = useDerivedValue(() => {
    return Data[Math.round(animated.value)].languages[language];
  }, []);

  const position = useDerivedValue(() => {
    const popularity = Data[Math.round(animated.value)].popularity;

    return popularity[language] ?? 0;
  });

  const textValue = useAnimatedProps(() => {
    return {
      text: `${rating.value}`,
    } as any;
  }, []);

  const ViewStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: Colors[language],
      width: withTiming(rating.value ?? 0, {duration: 1000}),
    };
  }, []);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withTiming(50 * position.value, {duration: 1500})},
      ],
      position: 'absolute',
      left: 0,
      right: 0,
    };
  }, []);

  return {rating, textValue, ViewStyle, containerAnimatedStyle};
}
