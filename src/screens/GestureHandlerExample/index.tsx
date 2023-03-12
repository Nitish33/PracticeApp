import React from 'react';

import Zoom from './Examples/Zoom/Zoom';
import {ScreenName} from '../../utils/Enums';
import {OptionType} from '../../interfaces/Options';
import DragAndDrop from './Examples/DragAndDrop/DragAndDrop';
import OptionList from '../../Components/OptionList/OptionList';

export const ExamplesList: Array<OptionType> = [
  {
    key: ScreenName.GHDragAndDrop,
    label: 'Drag And Drop',
    component: DragAndDrop,
  },
  {
    key: ScreenName.GHZoom,
    label: 'Zoom',
    component: Zoom,
  },
];

export default function Listing() {
  return <OptionList options={ExamplesList} />;
}
