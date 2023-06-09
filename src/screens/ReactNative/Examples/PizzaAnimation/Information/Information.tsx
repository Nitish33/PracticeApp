import {View, Text} from 'react-native';
import React from 'react';

import Styles from './styles';

export interface IInformationProps {
  label: string;
  title: string;
  message: string;
}

export default function Information(props: IInformationProps) {
  const {label, title, message} = props;

  return (
    <View style={Styles.containerStyle}>
      <Text style={[Styles.textStyle, Styles.lableStyle]}>{label}</Text>
      <Text style={[Styles.textStyle, Styles.titleStyle]}>{title}</Text>
      <Text style={[Styles.textStyle, Styles.messageStyle]}>{message}</Text>
    </View>
  );
}
