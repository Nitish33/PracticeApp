import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';
import {GestureDetector} from 'react-native-gesture-handler';

import Styles from './styles';
import useAnimated from './useAnimated';
import Images from '../../../../images/images';

export default function ComparisonSlider() {
  const {gesture, imageStyle, rightImageAnimatedStyle, sliderStyle} =
    useAnimated();

  return (
    <View style={Styles.containerStyle}>
      <Animated.View style={Styles.box}>
        <View style={Styles.comparisonBox}>
          <Animated.View style={[Styles.imageContainer]}>
            <Animated.Image
              style={Styles.imageStyle}
              source={Images.BlackPanthoor}
            />
          </Animated.View>

          <Animated.View
            style={[Styles.imageContainer, rightImageAnimatedStyle]}>
            <Animated.Image
              style={[Styles.imageStyle, imageStyle]}
              source={Images.BlackPantherGreyScale}
            />
          </Animated.View>
        </View>

        <GestureDetector gesture={gesture}>
          <Animated.View style={[Styles.thumb, sliderStyle]} />
        </GestureDetector>
      </Animated.View>
    </View>
  );
}
