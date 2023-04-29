import React from 'react';

import {ScreenName} from '../../utils/Enums';
import {OptionType} from '../../interfaces/Options';
import Parallex from './Examples/Parallex';
import OptionList from '../../Components/OptionList/OptionList';
import CardFlip from './Examples/CardFilp/CardFlip';
import ComparisonSlider from './Examples/ComparisonSlider/ComparisonSlider';
import Cars from './Examples/Cars/Cars';
import TitleMask from './TitleMask/TitleMask';

export const ExamplesList: Array<OptionType> = [
  {
    key: ScreenName.CLParallesx,
    label: 'Parallex',
    component: Parallex,
  },

  {
    key: ScreenName.CLCardFlip,
    label: 'Card Flip',
    component: CardFlip,
  },

  {
    key: ScreenName.CLSlider,
    label: 'Comparison Slider',
    component: ComparisonSlider,
  },

  {
    key: ScreenName.CLCars,
    label: 'Cars',
    component: Cars,
  },

  {
    key: ScreenName.CLTitleMask,
    label: 'Title mask',
    component: TitleMask,
  },
];

export default function Listing() {
  return <OptionList options={ExamplesList} />;
}
