import {View, Image, Button} from 'react-native';
import React from 'react';
import Images from '../../../../images/images';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import Styles from './styles';
import useAnimated from './useAnimated';

const Duration = 1500;

function ImageLayer({
  index,
  scale,
  opacity,
}: {
  index: number;
  scale: number;
  opacity: SharedValue<number>;
}) {
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale}],
      opacity: interpolate(
        opacity.value,
        [index - 1, index, index + 1],
        [0, 0.5, 0],
      ),
    };
  }, []);

  return (
    <Animated.Image
      source={Images.AntManImage}
      style={[Styles.imageStyle, animatedStyle]}
      resizeMode="contain"
    />
  );
}

export default function Antman() {
  const {animated, imageAnimatedStyle, animatedContainerStyle} = useAnimated();

  return (
    <View style={Styles.containerStyle}>
      <Animated.View style={[Styles.containerStyle, animatedContainerStyle]}>
        <Image
          style={Styles.waspStyle}
          source={Images.Wasp}
          resizeMode="contain"
        />

        <ImageLayer scale={1} opacity={animated} index={0} />
        <ImageLayer scale={0.8} opacity={animated} index={1} />
        <ImageLayer scale={0.6} opacity={animated} index={2} />
        <ImageLayer scale={0.4} opacity={animated} index={3} />
        <ImageLayer scale={0.2} opacity={animated} index={4} />
        <ImageLayer scale={0.1} opacity={animated} index={5} />

        <Animated.Image
          source={Images.AntManImage}
          style={[Styles.imageStyle, imageAnimatedStyle]}
          resizeMode="contain"
        />
      </Animated.View>

      <View>
        <Button
          title="Shrink"
          onPress={() => (animated.value = withTiming(5, {duration: Duration}))}
        />

        <Button
          title="Grow"
          onPress={() => (animated.value = withTiming(0, {duration: Duration}))}
        />
      </View>
    </View>
  );
}
