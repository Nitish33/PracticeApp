import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  SharedValue,
  useAnimatedReaction,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

interface Props {
  index: number;
  animated: SharedValue<number>;
  image: ReturnType<typeof require>;
}

export default function Background(props: Props) {
  const {animated, index, image} = props;

  const style = useAnimatedStyle(() => {
    return {
      zIndex: Math.floor(animated.value) === index ? 1 : 0,
    };
  });

  return (
    <Animated.View style={[StyleSheet.absoluteFill, style]}>
      <Image
        source={image}
        style={{
          width: '100%',
          height: '100%',
        }}
        blurRadius={20}
        resizeMode="cover"
      />
    </Animated.View>
  );
}
