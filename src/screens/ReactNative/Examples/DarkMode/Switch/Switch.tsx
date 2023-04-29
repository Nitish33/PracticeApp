import React from 'react';
import {View, Image} from 'react-native';
import Animated, {SharedValue} from 'react-native-reanimated';

import Styles from './styles';
import useAnimated from './useAnimated';
import Images from '../../../../../images/images';

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
