import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import Styles, {Size} from './styles';
import {WIDTH} from '../styles';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Images from '../../../../../images/images';
import useAnimated from './useAnimated';

export default function Switch({animated}: {animated: SharedValue<number>}) {
  const {containerAnimatedStyle, moonAnimatedStyle} = useAnimated(animated);

  return (
    <Animated.View style={[Styles.containerStyle, containerAnimatedStyle]}>
      <View style={Styles.imageContainerStyle}>
        <Image style={Styles.sun} source={Images.Sun} />
      </View>

      <View style={Styles.imageContainerStyle}>
        <Animated.Image
          style={[Styles.sun, moonAnimatedStyle]}
          source={Images.Moon}
        />
      </View>
    </Animated.View>
  );
}
