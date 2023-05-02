import React from 'react';
import {View, Image} from 'react-native';

import Styles from './styles';
import Images from '../../../../../images/images';
import Information from '../Information/Information';
import useAnimated from './useAnimated';
import Animated, {SharedValue} from 'react-native-reanimated';

export default function SceneThree({
  animated,
}: {
  animated: SharedValue<number>;
}) {
  const {coffeeAnimatedStyle} = useAnimated();

  return (
    <View style={Styles.containerStyle}>
      <View style={Styles.contentContainerStyle}>
        <Image source={Images.Plate} style={Styles.plateStyle} />

        <View style={Styles.coffeeContainer}>
          <Image source={Images.CoffeeCup} style={Styles.coffeeCup} />
          <Animated.Image
            source={Images.Coffee}
            style={[Styles.coffeeTexture, coffeeAnimatedStyle]}
          />
        </View>
      </View>

      <Information />
    </View>
  );
}
