import React from 'react';
import {Pressable} from 'react-native';

import Typography from '../Typography/Typography';
import {OptionType} from '../../interfaces/Options';

type OptionProps = {
  option: OptionType;
  onPress: (option: OptionType) => void;
};

export default function Option(props: OptionProps) {
  const {onPress, option} = props;

  return (
    <Pressable
      style={{padding: 16}}
      onPress={() => {
        onPress?.(option);
      }}>
      <Typography>{option.label}</Typography>
    </Pressable>
  );
}
