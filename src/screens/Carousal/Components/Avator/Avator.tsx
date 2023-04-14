import React from 'react';
import {Image} from 'react-native';

import Styles from './styles';

export interface IAvatorProps {
  size: number;
  source: ReturnType<typeof require>;
}

export default function Avator(props: IAvatorProps) {
  const {source, size} = props;

  return (
    <Image
      style={[
        {
          width: size,
          height: size,
          borderRadius: size,
        },
        Styles.containerStyle,
      ]}
      source={source}
      resizeMode="contain"
    />
  );
}
