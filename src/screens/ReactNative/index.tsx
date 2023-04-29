import React from 'react';
import {OptionType} from '../../interfaces/Options';
import OptionList from '../../Components/OptionList/OptionList';
import {ScreenName} from '../../utils/Enums';
import GapExample from './Examples/GapExample';
import ScrollableStickyButton from './Examples/ScrollableStickyButton';
import Antman from './Examples/Antman/Antman';

export const ExampleList: Array<OptionType> = [
  {key: ScreenName.RNGap, label: 'Gap', component: GapExample},
  {
    key: ScreenName.RNScrollView,
    label: 'Sticky Button',
    component: ScrollableStickyButton,
  },

  {
    key: ScreenName.AntmanAnimation,
    label: 'Ant man',
    component: Antman,
  },
];

export default function Listing() {
  return <OptionList options={ExampleList} />;
}
