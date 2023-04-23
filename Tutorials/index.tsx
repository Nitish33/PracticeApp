import React from 'react';
import OptionList from '../src/Components/OptionList/OptionList';
import {ScreenName} from '../src/utils/Enums';
import Parallex from './Parallex/Parallex';
import {OptionType} from '../src/interfaces/Options';

export const TutorialList: Array<OptionType> = [
  {
    key: ScreenName.TParallex,
    label: 'Parallex Carousal',
    component: Parallex,
  },
];

export default function Listing() {
  return <OptionList options={TutorialList} />;
}
