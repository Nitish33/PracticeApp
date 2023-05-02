import React from 'react';
import {View, Image} from 'react-native';

import Styles from './styles';
import Images from '../../../../../images/images';

export default function SceneTwo() {
  return (
    <View style={Styles.containerStyle}>
      <Image style={Styles.pizzaStyle} source={Images.Pizza} />
      <Image style={Styles.pizzaSliceStyle} source={Images.PizzaSlice} />
    </View>
  );
}
