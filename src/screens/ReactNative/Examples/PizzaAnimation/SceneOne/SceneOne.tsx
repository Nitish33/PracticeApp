import React from 'react';
import {View, Image} from 'react-native';

import Styles from './styles';
import Images from '../../../../../images/images';

export default function SceneOne() {
  return (
    <View style={Styles.containerStyle}>
      <Image source={Images.Fruits} style={Styles.fruitsImageStyle} />

      <Image source={Images.Momos} style={Styles.momosImageStyle} />

      <Image source={Images.DryFruits} style={Styles.dryFruitsStyle} />
    </View>
  );
}
