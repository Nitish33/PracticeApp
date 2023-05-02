import React from 'react';
import {View, Image} from 'react-native';

import Styles from './styles';
import Images from '../../../../../images/images';
import Information from '../Information/Information';
import {SharedValue} from 'react-native-reanimated';

export default function SceneTwo({animated}: {animated: SharedValue<number>}) {
  return (
    <View style={Styles.containerStyle}>
      <View style={Styles.pizzaContainer}>
        <Image style={Styles.pizzaStyle} source={Images.Pizza} />
        <Image style={Styles.pizzaSliceStyle} source={Images.PizzaSlice} />
      </View>

      <Information />
    </View>
  );
}
