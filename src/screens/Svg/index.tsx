import React from 'react';
import {OptionType} from '../../interfaces/Options';
import OptionList from '../../Components/OptionList/OptionList';
import {ScreenName} from '../../utils/Enums';
import ProgressBar from './Examples/ProgressBar/ProgressBar';

export const ExampleList: Array<OptionType> = [
  {key: ScreenName.SVGProgress, label: 'Progress Bar', component: ProgressBar},
];

export default function Listing() {
  return <OptionList options={ExampleList} />;
}
