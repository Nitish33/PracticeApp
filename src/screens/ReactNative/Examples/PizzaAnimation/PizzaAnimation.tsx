import {View, Text, ScrollView} from 'react-native';
import React from 'react';

import Styles from './styles';

export default function PizzaAnimation() {
  return (
    <View style={Styles.containerStyle}>
      <ScrollView style={Styles.scrollView} />
    </View>
  );
}
