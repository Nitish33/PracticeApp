import React from 'react';
import {View, Pressable} from 'react-native';

import Styles from './styles';
import Switch from './Switch/Switch';
import useAnimated from './useAnimated';
import DarkLayer from './DarkLayer/DarkLayer';
import LightLayer from './LightLayer/LightLayer';

export default function DarkMode() {
  const {animated, toggle} = useAnimated();

  return (
    <View style={Styles.containerStyle}>
      <Pressable style={Styles.toggleContainer} onPress={toggle}>
        <LightLayer animated={animated} />
        <DarkLayer animated={animated} />

        <Switch animated={animated} />
      </Pressable>
    </View>
  );
}
