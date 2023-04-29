import {View, Text, Image} from 'react-native';
import React from 'react';
import {CarousalInterface} from '../../Data';

import Styles from './styles';

export interface ICardProps {
  data: CarousalInterface;
}

export default function Card(props: ICardProps) {
  const {data} = props;

  return (
    <View style={Styles.containerStyle}>
      <Image style={Styles.imgStyle} source={data.image} />
    </View>
  );
}
