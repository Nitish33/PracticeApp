import React from 'react';

import {ScreenName} from '../../utils/Enums';
import {OptionType} from '../../interfaces/Options';
import ReactNativeExample from '../ReactNative/routes';
import OptionList from '../../Components/OptionList/OptionList';
import GestureHandlerExample from '../GestureHandlerExample/routes';
import CarousalExample from '../Carousal/routes';
import TutorialList from '../../../Tutorials/routes';
import SVGList from '../Svg/routes';
import Skia from '../Skia/routes';

export const ExampleList: Array<OptionType> = [
  {
    label: 'Gesture Handler',
    key: ScreenName.GestureHandler,
    component: GestureHandlerExample,
  },
  {
    label: 'React Native',
    key: ScreenName.ReactNativeExample,
    component: ReactNativeExample,
  },

  {
    label: 'Carousal',
    key: ScreenName.RNCarousal,
    component: CarousalExample,
  },

  {
    label: 'Tutorial',
    key: ScreenName.Tutorial,
    component: TutorialList,
  },

  {
    label: 'SVG Animation',
    key: ScreenName.SVG,
    component: SVGList,
  },

  {label: 'Skia', key: ScreenName.Skia, component: Skia},
];

export default function Listing() {
  return <OptionList options={ExampleList} />;
}
