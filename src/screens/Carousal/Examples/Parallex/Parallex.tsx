import React from 'react';
import Animated from 'react-native-reanimated';

import Card from './Card';
import useAnimated from './useAnimated';
import {CarousalData, CarousalInterface} from '../../Data';

export default function Parallex() {
  const {animated, scrollHandler} = useAnimated();

  return (
    <Animated.ScrollView
      onScroll={scrollHandler}
      horizontal
      pagingEnabled
      bouncesZoom={false}
      overScrollMode="never">
      {CarousalData.map((data: CarousalInterface, index: number) => {
        return (
          <Card card={data} key={index} index={index} animated={animated} />
        );
      })}
    </Animated.ScrollView>
  );
}
