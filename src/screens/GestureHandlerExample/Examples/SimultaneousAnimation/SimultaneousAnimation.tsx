import {View} from 'react-native';
import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import Styles from './styles';
import Typography from '../../../../Components/Typography/Typography';

export default function SimultaneousAnimation() {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const savedOffset = useSharedValue({x: 0, y: 0});

  const rotation = useSharedValue(0);
  const savedRotation = useSharedValue(0);

  const zoom = useSharedValue(1);
  const savedZoom = useSharedValue(1);

  const panHandler = Gesture.Pan()
    .onUpdate(({translationX, translationY}) => {
      offsetX.value = savedOffset.value.x + translationX;
      offsetY.value = savedOffset.value.y + translationY;
    })
    .onEnd(() => {
      savedOffset.value = {
        x: offsetX.value,
        y: offsetY.value,
      };
    });

  const zoomHandler = Gesture.Pinch()
    .onUpdate(({scale}) => {
      zoom.value = savedZoom.value * scale;
    })
    .onEnd(() => {
      savedZoom.value = zoom.value;
    });

  const rotateHandler = Gesture.Rotation()
    .onUpdate(({rotation: r}) => {
      rotation.value = savedRotation.value + r / 2;
    })
    .onEnd(() => {
      savedRotation.value = rotation.value;
    });

  const style = useAnimatedStyle(() => {
    return {
      width: 300,
      height: 300,
      backgroundColor: 'magenta',
      justifyContent: 'center',
      alignItems: 'center',
      transform: [
        {translateX: offsetX.value},
        {translateY: offsetY.value},
        {rotate: `${rotation.value}rad`},
        {scale: zoom.value},
      ],
    };
  }, []);

  const gesture = Gesture.Simultaneous(
    panHandler,
    Gesture.Simultaneous(zoomHandler, rotateHandler),
  );

  return (
    <View style={Styles.containerStyle}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={style}>
          <Typography>Nitish</Typography>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}
