import {View, Text} from 'react-native';
import React from 'react';
import {Circle, Canvas} from '@shopify/react-native-skia';

const RADIUS = 50;
const CX = 200;
const CY = 200;

export default function MeatBall() {
  return (
    <Canvas style={{flex: 1}}>
      <Circle cx={CX} cy={CY} r={RADIUS} />
    </Canvas>
  );
}
