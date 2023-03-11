import {Text, TextProps} from 'react-native';
import React from 'react';

export default function Typography(props: TextProps) {
  return <Text {...props} style={[{color: 'black'}, props.style]} />;
}
