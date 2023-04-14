import React from 'react';

import {ScreenName} from '../../utils/Enums';
import {OptionType} from '../../interfaces/Options';
import Parallex from './Examples/Parallex';
import OptionList from '../../Components/OptionList/OptionList';

export const ExamplesList: Array<OptionType> = [
  {
    key: ScreenName.CLParallesx,
    label: 'Parallex',
    component: Parallex,
  },
];

export default function Listing() {
  return <OptionList options={ExamplesList} />;
}
