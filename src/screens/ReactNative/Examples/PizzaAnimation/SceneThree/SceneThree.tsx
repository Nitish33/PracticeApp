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
  const {
    tableAnimatedStyle,
    plateAnimatdStyle,
    coffeeAnimatedStyle,
    contentContainerAnimatedStyle,
    coffeeContainerAnimatedStyle,
  } = useAnimated(animated);

  return (
    <View style={Styles.containerStyle}>
      <Animated.Image
        source={Images.Bread}
        style={[Styles.tableStyle, tableAnimatedStyle]}
        resizeMode="cover"
      />

      <Animated.View
        style={[Styles.contentContainerStyle, contentContainerAnimatedStyle]}>
        <Animated.Image
          source={Images.Plate}
          style={[Styles.plateStyle, plateAnimatdStyle]}
        />

        <Animated.View
          style={[Styles.coffeeContainer, coffeeContainerAnimatedStyle]}>
          <Image source={Images.CoffeeCup} style={Styles.coffeeCup} />
          <Animated.Image
            source={Images.Coffee}
            style={[Styles.coffeeTexture, coffeeAnimatedStyle]}
          />
        </Animated.View>
      </Animated.View>

      <Information
        label="Things you can do"
        title="Order meals"
        message="Request your meals and find our how long it takes for the delivery and much more"
      />
    </View>
  );
}
