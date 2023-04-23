import React from 'react';
import {Image, View} from 'react-native';

import Styles, {AVATAR_SIZE} from '../styles';
import {CarousalInterface} from '../../../src/screens/Carousal/Data';
import Avator from '../../../src/screens/Carousal/Components/Avator/Avator';
import Animated, {SharedValue} from 'react-native-reanimated';

export interface ICardProps {
  index: number;
  card: CarousalInterface;
  animated: SharedValue<number>;
}

export default function Card(props: ICardProps) {
  const {card, animated} = props;

  return (
    <View style={Styles.cardContainerStyle}>
      <View style={Styles.frameStyle}>
        <View>
          <Animated.Image
            source={card.image}
            style={[Styles.imageStyle]}
            resizeMode="cover"
          />
        </View>
      </View>

      <View style={Styles.avatorStyle}>
        <Avator source={card.image} size={AVATAR_SIZE} />
      </View>
    </View>
  );
}
