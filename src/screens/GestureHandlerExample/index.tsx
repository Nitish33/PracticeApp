import React from 'react';

import Zoom from './Examples/Zoom/Zoom';
import {ScreenName} from '../../utils/Enums';
import {OptionType} from '../../interfaces/Options';
import DragAndDrop from './Examples/DragAndDrop/DragAndDrop';
import OptionList from '../../Components/OptionList/OptionList';
import DragAndPress from './Examples/DragAndPress/DragAndPress';
import SimultaneousAnimation from './Examples/SimultaneousAnimation/SimultaneousAnimation';

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

  {
    key: ScreenName.GHDragAndPress,
    label: 'Drag and Long Press',
    component: DragAndPress,
  },

  {
    key: ScreenName.GHSimultaneous,
    label: 'Pan, Zoom and Rotate',
    component: SimultaneousAnimation,
  },
];

export default function Listing() {
  return <OptionList options={ExamplesList} />;
}
