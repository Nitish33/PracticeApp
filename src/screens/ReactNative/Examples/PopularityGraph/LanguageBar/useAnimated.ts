import {
  SharedValue,
  useAnimatedProps,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import {Data, Languages, LanguageOption} from '../PopularityData';

export default function useAnimated(
  animated: SharedValue<number>,
  language: LanguageOption,
  index: number,
) {
  const rating = useDerivedValue(() => {
    return Data[Math.round(animated.value)].languages[language];
  }, []);

  const position = useDerivedValue(() => {
    let pos = Languages.length - 1;

    const allLang = Data[Math.round(animated.value)].languages;

    for (const key in allLang) {
      if (key === language) {
        continue;
      }

      if (allLang[key as LanguageOption] < allLang[language]) {
        --pos;
      }
    }

    return pos;
  });

  const textValue = useAnimatedProps(() => {
    return {
      text: `${rating.value}`,
    } as any;
  }, []);

  const ViewStyle = useAnimatedStyle(() => {
    return {
      backgroundColor: 'red',

      width: withTiming(rating.value ?? 0, {duration: 1000}),
    };
  }, []);

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: withTiming(50 * position.value, {duration: 1000})},
      ],
      position: 'absolute',
      left: 0,
      right: 0,
    };
  }, []);

  return {rating, textValue, ViewStyle, containerAnimatedStyle};
}
