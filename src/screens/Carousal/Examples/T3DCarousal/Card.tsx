import {View, Text, Image} from 'react-native';
import React from 'react';
import {CARD_SIZE} from './styles';
import Animated, {
  interpolate,
  SharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface Props {
  animated: SharedValue<number>;
  index: number;
  image: ReturnType<typeof require>;
}

const NUM_CARDS = 12;
const UNIT_ANGLE = 360 / NUM_CARDS;

export default function Card(props: Props) {
  const {index, image, animated} = props;

  const animatedStyle = useAnimatedStyle(() => {
    const angle = (animated.value + index) * UNIT_ANGLE * (3.14 / 180);

    return {
      zIndex: 50 * Math.cos(angle),
      transform: [
        {perspective: 1000},
        {translateX: -CARD_SIZE * 3 * Math.sin(angle)},
        {translateY: (CARD_SIZE / 1.2) * Math.cos(angle)},
        {rotateY: `${(angle * 180) / 3.14}deg`},
        {scale: interpolate(Math.cos(angle), [-1, 1], [0.6, 1.2])},
      ],
    };
  });

  const animatedZIndex = useAnimatedStyle(() => {
    const angle = (animated.value + index) * UNIT_ANGLE * (3.14 / 180);

    return {
      zIndex: (Math.cos(angle) + 1) * 50,
    };
  });

  return (
    <Animated.View
      style={[
        {
          position: 'absolute',
          width: CARD_SIZE,
          height: CARD_SIZE * 1.2,
          justifyContent: 'center',
          alignItems: 'center',
        },
        animatedZIndex,
      ]}>
      <Animated.View
        style={[
          {
            position: 'absolute',
            width: CARD_SIZE,
            height: CARD_SIZE * 1.3,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 12,
            overflow: 'hidden',
          },
          animatedStyle,
        ]}>
        <Image
          style={{width: '100%', height: '100%', position: 'absolute'}}
          source={image}
          resizeMode="cover"
          blurRadius={10}
        />

        <Image
          style={{width: '100%', height: '100%'}}
          source={image}
          resizeMode="contain"
        />

        <View
          style={{
            position: 'absolute',
            top: 8,
            bottom: 8,
            right: 8,
            left: 8,
            borderWidth: 1,
            borderRadius: 12,
            borderColor: 'rgba(255, 255, 255, 0.5)',
          }}
        />
      </Animated.View>
    </Animated.View>
  );
}
