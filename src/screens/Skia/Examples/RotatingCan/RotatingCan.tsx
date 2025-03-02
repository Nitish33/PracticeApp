import React, {useState} from 'react';
import {Canvas, Group, Image, useImage} from '@shopify/react-native-skia';
import {View, ScrollView, Image as RNImage, Pressable} from 'react-native';

import Animated, {
  Easing,
  runOnJS,
  withDelay,
  withRepeat,
  withTiming,
  Extrapolate,
  interpolate,
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

const CAN_HEIGHT = 200;

// @refresh reset
export default function RotatingCan() {
  const [allImages] = useState([
    require('../../../../images/coffee/Bold_bean.jpg'),
    require('../../../../images/coffee/Cold_Coffee.jpg'),
    require('../../../../images/coffee/Dark_roast.jpg'),
    require('../../../../images/coffee/Espresso_Rush.jpg'),
    require('../../../../images/coffee/Golldenn.jpg'),
    require('../../../../images/coffee/Hazelnut.jpg'),
    require('../../../../images/coffee/Midnight.jpg'),
    require('../../../../images/coffee/Skull_Crusher.jpg'),
  ]);

  const [currentImage, updateCurrentImage] = useState(0);
  const [nextImage, updateNextImage] = useState(1);

  const image = useImage(require('../../../../images/tin-mockup.png'));
  const captain = useImage(allImages[currentImage]);
  const next = useImage(allImages[nextImage]);

  const animation = useSharedValue(0);
  const direction = useSharedValue(1);

  const sPosition = useDerivedValue(() =>
    direction.value === 1 ? 0 : -2 * CAN_HEIGHT,
  );

  const translationValue = useDerivedValue(() => {
    return interpolate(
      animation.value,
      [0, 1],
      [sPosition.value - 10, sPosition.value - direction.value * CAN_HEIGHT],
      Extrapolate.CLAMP,
    );
  });

  const translationNext = useDerivedValue(() => {
    return interpolate(
      animation.value,
      [1, 2],
      [
        sPosition.value - direction.value * CAN_HEIGHT - 10,
        sPosition.value - 2 * direction.value * CAN_HEIGHT - 10,
      ],
      Extrapolate.CLAMP,
    );
  });

  const containerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: interpolate(animation.value, [0, 1, 2], [0, -5, 0])},
        {
          translateX: interpolate(
            animation.value,
            [0, 0.5, 1, 1.5, 2],
            [0, 5, 0, -5, 0],
          ),
        },

        {
          rotate: `${interpolate(
            animation.value,
            [0, 0.5, 1, 1.5, 2],
            [0, -5, 0, 5, 0],
          )}deg`,
        },
      ],
    };
  });

  const opacityNext = useDerivedValue(() =>
    interpolate(animation.value, [1, 1.01], [0, 1], Extrapolate.CLAMP),
  );

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 24,
        paddingBottom: 64,
      }}>
      <Animated.View
        style={[
          {
            flex: 1,
            marginTop: 50,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 50,
            width: '100%',
          },
          containerAnimatedStyle,
        ]}>
        <Canvas
          style={{
            width: CAN_HEIGHT,
            height: CAN_HEIGHT + 90,
          }}>
          <Group>
            <Image
              image={image}
              rect={{
                x: 0,
                y: 0,
                width: 0.613 * (CAN_HEIGHT + 90),
                height: CAN_HEIGHT + 90,
              }}
              //   fit="cover"
            />
            <Image
              image={captain}
              y={30}
              width={3 * CAN_HEIGHT}
              height={CAN_HEIGHT + 60}
              x={translationValue}
              blendMode="modulate"
            />
          </Group>
        </Canvas>

        <Canvas
          style={{
            position: 'absolute',
            width: CAN_HEIGHT,
            height: CAN_HEIGHT + 90,
          }}>
          <Group opacity={opacityNext}>
            <Image
              image={image}
              rect={{
                x: 0,
                y: 0,
                width: 0.613 * (CAN_HEIGHT + 90),
                height: CAN_HEIGHT + 90,
              }}
              //   fit="cover"
            />
            <Image
              image={next}
              y={30}
              width={3 * CAN_HEIGHT}
              height={CAN_HEIGHT + 60}
              x={translationNext}
              blendMode="modulate"
            />
          </Group>
        </Canvas>
      </Animated.View>

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: 24, paddingRight: 24}}>
          {allImages?.map((img, index) => (
            <Pressable
              style={{width: 100, overflow: 'hidden', marginRight: 20}}
              onPress={() => {
                if (currentImage === index) {
                  return;
                }

                direction.value = currentImage < index ? 1 : -1;
                updateNextImage(index);

                animation.value = withTiming(
                  2,
                  {
                    duration: 500,
                    easing: Easing.linear,
                  },
                  finished => {
                    if (finished) {
                      runOnJS(updateCurrentImage)(index);
                      animation.value = withDelay(
                        100,
                        withTiming(0, {duration: 0}),
                      );
                    }
                  },
                );
              }}>
              <RNImage style={{width: 300, height: 100}} source={img} />
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
