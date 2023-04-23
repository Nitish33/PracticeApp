import {View, Text} from 'react-native';
import React from 'react';
import {SharedValue} from 'react-native-reanimated';
import {WINDOW_WIDTH} from '../../../src/utils/Constants';
import {CARD_WIDTH} from '../styles';

export default function useAnimated(
  animated: SharedValue<number>,
  index: number,
) {
  const PreviewCardPosition = (index - 1) * WINDOW_WIDTH;
  const CurrentCardPosition = index * WINDOW_WIDTH;
  const NextCardPosition = (index + 1) * WINDOW_WIDTH;

  const imageTranslation = -(
    CurrentCardPosition +
    (WINDOW_WIDTH - CARD_WIDTH) / 2
  );

  return {};
}
