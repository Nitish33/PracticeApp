import React from 'react';

import Clock from './Examples/Clock/Clock';
import {ScreenName} from '../../utils/Enums';
import Shader from './Examples/Shader/Shader';
import {OptionType} from '../../interfaces/Options';
import MeatBall from './Examples/MeatBall/MeatBall';
import SkiaBasic from './Examples/SkiaBasic/SkiaBasic';
import ColorPicker from './Examples/ColorPicker/ColorPicker';
import StreetLight from './Examples/StreetLight/StreetLight';
import Neumorphism from './Examples/Neumorphism/Neumorphism';
import OptionList from '../../Components/OptionList/OptionList';

export const ExampleList: Array<OptionType> = [
  {key: ScreenName.SkiaBasic, label: 'Skia Basics', component: SkiaBasic},
  {key: ScreenName.SkiaMeatBall, label: 'Skia Meatball', component: MeatBall},
  {key: ScreenName.SkiaShader, label: 'Skia Shader', component: Shader},
  {
    key: ScreenName.SkiaColorPicker,
    label: 'Color Picker',
    component: ColorPicker,
  },

  {
    key: ScreenName.StreetLight,
    label: 'Street Light',
    component: StreetLight,
  },

  {
    key: ScreenName.Neumorphism,
    label: 'Neumorphism',
    component: Neumorphism,
  },

  {
    key: ScreenName.NeumorphismClock,
    label: 'NeumorphismClock',
    component: Clock,
  },
];

export default function Listing() {
  return <OptionList options={ExampleList} />;
}
