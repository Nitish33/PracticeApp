import React from 'react';
import {View, Image} from 'react-native';

import Styles from './styles';
import Images from '../../../../../images/images';

export default function SceneThree() {
  return (
    <View style={Styles.containerStyle}>
      <Image source={Images.Pizza} />
    </View>
  );
}
