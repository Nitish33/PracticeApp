import React from 'react';
import {TextInput} from 'react-native';
import Animated, {SharedValue} from 'react-native-reanimated';

import Styles from './styles';
import useAnimated from './useAnimated';
import {LanguageOption} from '../PopularityData';
import ReanimatedText from '../../../../../Components/ReanimatedText/ReanimatedText';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export interface ILanguageBarProps {
  index: number;
  language: LanguageOption;
  animated: SharedValue<number>;
}

Animated.addWhitelistedNativeProps({children: true});

export default function LanguageBar(props: ILanguageBarProps) {
  const {animated, language, index} = props;

  const {ViewStyle, containerAnimatedStyle, rating, textValue} = useAnimated(
    animated,
    language,
    index,
  );

  return (
    <Animated.View
      key={props.index}
      style={[Styles.containerStyle, containerAnimatedStyle]}>
      <Animated.View style={ViewStyle} />
      <ReanimatedText value={rating} />
    </Animated.View>
  );
}
