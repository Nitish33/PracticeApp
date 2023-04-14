import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function GapExample() {
  return (
    <View style={Styles.container}>
      <View style={Styles.box} />

      <View style={Styles.box} />
      <View style={Styles.box} />
      <View style={Styles.box} />
      <View style={Styles.box} />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    rowGap: 10,
  },

  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
  },
});
