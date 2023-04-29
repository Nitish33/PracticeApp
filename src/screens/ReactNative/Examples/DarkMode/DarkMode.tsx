import {View, Text, Pressable} from 'react-native';
import React from 'react';

import Styles from './styles';
import LightLayer from './LightLayer/LightLayer';
import DarkLayer from './DarkLayer/DarkLayer';
import useAnimated from './useAnimated';
import Switch from './Switch/Switch';

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
