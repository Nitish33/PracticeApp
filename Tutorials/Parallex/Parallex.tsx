import React from 'react';
import Animated from 'react-native-reanimated';

import Card from './Card/Card';
import {CarousalData, CarousalInterface} from '../../src/screens/Carousal/Data';
import useAnimated from './useAnimation';

export default function Parallex() {
  const {animated, scrollHandler} = useAnimated();

  return (
    <Animated.ScrollView
      horizontal
      onScroll={scrollHandler}
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
