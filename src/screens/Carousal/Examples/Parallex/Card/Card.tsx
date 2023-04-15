import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

import useAnimated from './useAnimated';
import Styles, {AVATAR_SIZE} from '../styles';
import Avator from '../../../Components/Avator/Avator';
import {ICardProps} from '../../../interfaces/CardProps';

export default function Card(props: ICardProps) {
  const {card, index, animated} = props;

  const {imageAnimatedStyle} = useAnimated(index, animated);

  return (
    <View style={Styles.cardContainerStyle}>
      <View style={Styles.frameStyle}>
        <Animated.View
          style={{
            transform: [{translateX: animated}],
          }}>
          <Animated.Image
            source={card.image}
            style={[Styles.imageStyle, imageAnimatedStyle]}
            resizeMode="cover"
          />
        </Animated.View>
      </View>

      <View style={Styles.avatorStyle}>
        <Avator source={card.image} size={AVATAR_SIZE} />
      </View>
    </View>
  );
}
