import React from 'react';
import {View} from 'react-native';

import Styles from './styles';
import Card from './Card/Card';
import FlipCard from './FlipCard/FlipCard';
import useScrollAnimated from '../../useScrollAnimated';
import CardRender from '../../Components/CardRender/CardRender';

export default function CardFlip() {
  const {scrollHandler, animated} = useScrollAnimated();

  return (
    <View style={Styles.containerStyle}>
      <FlipCard animated={animated} />

      <CardRender
        scrollHandler={scrollHandler}
        animated={animated}
        render={(data, index) => {
          return (
            <Card card={data} animated={animated} index={index} key={index} />
          );
        }}
      />
    </View>
  );
}
