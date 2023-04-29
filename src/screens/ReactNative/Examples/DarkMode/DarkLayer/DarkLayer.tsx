import React from 'react';
import {View} from 'react-native';
import Animated, {SharedValue} from 'react-native-reanimated';

import Styles from './styles';
import useAnimated from './useAnimated';
import Images from '../../../../../images/images';

export default function DarkLayer({animated}: {animated: SharedValue<number>}) {
  const {
    containerAnimatedStyle,
    starAnimatedStyle,
    layer1AnimatedStyle,
    layer2AnimatedStyle,
    layer3AnimatedStyle,
  } = useAnimated(animated);

  return (
    <Animated.View style={[Styles.containerStyle]}>
      <Animated.View style={containerAnimatedStyle}>
        <View style={Styles.layer4} />
        <Animated.View style={[Styles.layer3, layer3AnimatedStyle]} />
        <Animated.View style={[Styles.layer2, layer2AnimatedStyle]} />
        <Animated.View style={[Styles.layer1, layer1AnimatedStyle]} />
      </Animated.View>

      <Animated.Image
        style={[Styles.stars, starAnimatedStyle]}
        source={Images.Stars}
      />
    </Animated.View>
  );
}
