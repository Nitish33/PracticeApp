import React from 'react';
import {View, Text} from 'react-native';
import Animated from 'react-native-reanimated';

import Styles from './styles';
import useAnimated from './useAnimated';
import {ICardProps} from '../../../interfaces/CardProps';

export default function Card(props: ICardProps) {
  const {card, animated, index} = props;

  const {imageAnimated, animatedStyle} = useAnimated(animated, index);

  return (
    <View style={Styles.containerStyle}>
      <View style={Styles.contentContainer}>
        <Animated.Image
          style={[Styles.imageStyle, imageAnimated]}
          source={card.image}
          resizeMode="cover"
        />

        <Animated.View style={animatedStyle}>
          <Text style={Styles.titleStyle}>{card.title}</Text>

          <Text style={Styles.subTitleStyle}>{card.title}</Text>

          <Text style={[Styles.moviesCount]}>
            7 <Text style={Styles.subTitleStyle}>Movies</Text>
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}
