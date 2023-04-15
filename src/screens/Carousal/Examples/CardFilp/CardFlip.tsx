import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

import Styles from './styles';
import Card from './Card/Card';
import {CarousalData} from '../../Data';
import useAnimated from './useAnimated';
import FlipCard from './FlipCard/FlipCard';

export default function CardFlip() {
  const {scrollHandler, animated} = useAnimated();

  return (
    <View style={Styles.containerStyle}>
      <FlipCard animated={animated} />

      <Animated.ScrollView horizontal pagingEnabled onScroll={scrollHandler}>
        {CarousalData.map((data, index) => {
          return (
            <Card card={data} animated={animated} index={index} key={index} />
          );
        })}
      </Animated.ScrollView>
    </View>
  );
}
