import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Option from './Option';
import {OptionListProps, OptionType} from '../../interfaces/Options';

export default function OptionList(props: OptionListProps) {
  const {options} = props;

  const navigation = useNavigation();

  const onOptionSelected = (option: OptionType) => {
    navigation.navigate(option.key);
  };

  return (
    <FlatList
      data={options}
      keyExtractor={item => item.key}
      renderItem={({item}) => (
        <Option option={item} onPress={onOptionSelected} />
      )}
    />
  );
}
