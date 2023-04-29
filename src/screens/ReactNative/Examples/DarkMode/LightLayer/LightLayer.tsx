import React from 'react';
import {View} from 'react-native';
import Animated, {SharedValue} from 'react-native-reanimated';

import Styles from './styles';
import useAnimated from './useAnimated';
import Images from '../../../../../images/images';

export default function LightLayer({
  animated,
}: {
  animated: SharedValue<number>;
}) {
  const {
    cloudAnimatedStyle,
    layer1AnimatedStyle,
    layer2AnimatedStyle,
    layer3AnimatedStyle,
  } = useAnimated(animated);

  return (
    <View style={Styles.containerStyle}>
      <View style={Styles.layer4} />
      <Animated.View style={[Styles.layer3, layer3AnimatedStyle]} />
      <Animated.View style={[Styles.layer2, layer2AnimatedStyle]} />
      <Animated.View style={[Styles.layer1, layer1AnimatedStyle]} />

      <Animated.Image
        style={[Styles.cloudStyle, cloudAnimatedStyle]}
        source={Images.Cloud}
      />
    </View>
  );
}
