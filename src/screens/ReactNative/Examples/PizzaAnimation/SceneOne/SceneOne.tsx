import React from 'react';
import {View} from 'react-native';
import Animated, {SharedValue} from 'react-native-reanimated';

import Styles from './styles';
import useAnimated from './useAnimated';
import Images from '../../../../../images/images';
import Information from '../Information/Information';

export default function SceneOne({animated}: {animated: SharedValue<number>}) {
  const {momosAnimatedStyle, fruitsAnimatedStyle, dryFruitsAnimatedStyle} =
    useAnimated(animated);

  return (
    <View style={Styles.containerStyle}>
      <View style={Styles.contentContainerStyle}>
        <Animated.Image
          source={Images.Fruits}
          style={[Styles.fruitsImageStyle, fruitsAnimatedStyle]}
        />

        <Animated.Image
          source={Images.Momos}
          style={[Styles.momosImageStyle, momosAnimatedStyle]}
        />

        <Animated.Image
          source={Images.DryFruits}
          style={[Styles.dryFruitsStyle, dryFruitsAnimatedStyle]}
        />
      </View>

      <Information
        label="Things you can do"
        title="Browse Food"
        message="Select from a range of food. Find your favourite or even pick chef recommedations"
      />
    </View>
  );
}
