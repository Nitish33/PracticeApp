import React from 'react';
import {ScreenName} from '../../utils/Enums';
import OptionList from '../../Components/OptionList/OptionList';

const ExampleList = [
  {label: 'Gesture Handler', key: ScreenName.GestureHandler},
];

export default function Listing() {
  return <OptionList options={ExampleList} />;
}
