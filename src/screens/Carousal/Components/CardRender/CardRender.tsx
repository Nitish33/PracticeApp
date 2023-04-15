import React from 'react';
import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

import {CarousalData, CarousalInterface} from '../../Data';

export interface ICardRenderProps {
  animated: SharedValue<number>;
  scrollHandler: ReturnType<typeof useAnimatedScrollHandler>;

  render: (card: CarousalInterface, index: number) => React.ReactNode;
}

export default function CardRender(props: ICardRenderProps) {
  const {scrollHandler, render} = props;

  return (
    <Animated.ScrollView horizontal pagingEnabled onScroll={scrollHandler}>
      {CarousalData.map((data, index) => render?.(data, index))}
    </Animated.ScrollView>
  );
}
