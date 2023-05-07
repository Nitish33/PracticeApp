import React from 'react';
import Animated, {SharedValue} from 'react-native-reanimated';

import Styles from './styles';
import useAnimated from './useAnimated';
import {LanguageOption} from '../PopularityData';
import ReanimatedText from '../../../../../Components/ReanimatedText/ReanimatedText';

export interface ILanguageBarProps {
  index: number;
  language: LanguageOption;
  animated: SharedValue<number>;
}

Animated.addWhitelistedNativeProps({children: true});

export default function LanguageBar(props: ILanguageBarProps) {
  const {animated, language} = props;

  const {ViewStyle, containerAnimatedStyle, rating} = useAnimated(
    animated,
    language,
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
