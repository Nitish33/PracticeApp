import React from 'react';
import {OptionType} from '../../interfaces/Options';
import OptionList from '../../Components/OptionList/OptionList';
import {ScreenName} from '../../utils/Enums';
import SkiaBasic from './Examples/SkiaBasic/SkiaBasic';
import MeatBall from './Examples/MeatBall/MeatBall';

export const ExampleList: Array<OptionType> = [
  {key: ScreenName.SkiaBasic, label: 'Skia Basics', component: SkiaBasic},
  {key: ScreenName.SkiaMeatBall, label: 'Skia Meatball', component: MeatBall},
];

export default function Listing() {
  return <OptionList options={ExampleList} />;
}
