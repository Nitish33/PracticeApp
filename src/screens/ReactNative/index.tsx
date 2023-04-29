import React from 'react';
import {OptionType} from '../../interfaces/Options';
import OptionList from '../../Components/OptionList/OptionList';
import {ScreenName} from '../../utils/Enums';
import GapExample from './Examples/GapExample';
import ScrollableStickyButton from './Examples/ScrollableStickyButton';
import Antman from './Examples/Antman/Antman';
import DarkMode from './Examples/DarkMode/DarkMode';

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

  {
    key: ScreenName.DarkModeToggle,
    label: 'Dark Mode Switch',
    component: DarkMode,
  },
];

export default function Listing() {
  return <OptionList options={ExampleList} />;
}
