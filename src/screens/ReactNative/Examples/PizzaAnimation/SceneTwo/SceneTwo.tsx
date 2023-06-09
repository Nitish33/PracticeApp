import React from 'react';
import {View, Image} from 'react-native';

import Styles from './styles';
import Images from '../../../../../images/images';
import Information from '../Information/Information';
import Animated, {SharedValue} from 'react-native-reanimated';
import useAnimated from './useAnimated';

export default function SceneTwo({animated}: {animated: SharedValue<number>}) {
  const {
    pizzaAnimatedStyle,
    noodleAnimatedStyle,
    pizzaContainerStyle,
    coffeeAnimatedStyle,
    coffeeCupAnimatedStyle,
    pizzaContentContainerStyle,
    pizzaSliceAnimatedStyle,
  } = useAnimated(animated);

  return (
    <View style={Styles.containerStyle}>
      <View style={{flex: 1}}>
        <Animated.View style={[Styles.pizzaContainer, pizzaContainerStyle]}>
          <Animated.View
            style={[Styles.pizzaContentContainer, pizzaContentContainerStyle]}>
            <Animated.Image
              style={[Styles.pizzaStyle, pizzaAnimatedStyle]}
              source={Images.Pizza}
            />

            <Animated.View
              style={[Styles.pizzaSliceStyle, pizzaSliceAnimatedStyle]}>
              <Animated.Image
                source={Images.PizzaSlice}
                style={Styles.pizzaSliceLayerStyle}
              />
            </Animated.View>
          </Animated.View>
        </Animated.View>

        <Animated.View style={[Styles.coffeeContainer, coffeeCupAnimatedStyle]}>
          <Image source={Images.CoffeeCup} style={Styles.coffeeCup} />
          <Animated.Image
            source={Images.Coffee}
            style={[Styles.coffeeTexture, coffeeAnimatedStyle]}
          />
        </Animated.View>

        <Animated.Image
          style={[Styles.noodlesStyle, noodleAnimatedStyle]}
          source={Images.Noodles}
          resizeMode="contain"
        />

        <Animated.Image
          style={[Styles.noodlesStyle]}
          source={Images.Pasta}
          resizeMode="contain"
        />
      </View>

      <Information
        label="Things you can do"
        title="Find favourites"
        message="Easily find favourites. We will find food similar to your searches as well"
      />
    </View>
  );
}
