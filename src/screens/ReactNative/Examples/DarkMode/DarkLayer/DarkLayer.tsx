import {View, Text, Image} from 'react-native';
import React from 'react';

import Styles from './styles';
import Images from '../../../../../images/images';
import Animated, {SharedValue} from 'react-native-reanimated';
import useAnimated from './useAnimated';

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
