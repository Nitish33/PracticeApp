import React, {useRef, useState} from 'react';
import {Canvas, Group, Image, useImage} from '@shopify/react-native-skia';
import {
  View,
  ScrollView,
  Image as RNImage,
  Pressable,
  Text,
  Dimensions,
} from 'react-native';

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
  interpolateColor,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

const CAN_HEIGHT = 200;

const DeviceWidth = Dimensions.get('window').width;

function getComplementaryColor(hex: string) {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Convert to RGB
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Compute complementary color
  let compR = 255 - r;
  let compG = 255 - g;
  let compB = 255 - b;

  let brightness = compR * 0.299 + compG * 0.587 + compB * 0.114;

  return brightness > 128 ? '#FFFFFF' : '#000000';
}

// @refresh reset
export default function RotatingCan() {
  const [allImages] = useState([
    {
      name: 'Bold Bean',
      desc: 'Nostrud incididunt velit cillum non dolore nisi velit aute cupidatat esse in dolore cillum.',
      color: '#867158',
      image: require('../../../../images/coffee/Bold_bean.jpg'),
    },
    {
      name: 'Cold Coffee',
      desc: 'Ullamco occaecat officia quis pariatur sit laboris duis eiusmod ullamco non voluptate.',
      color: '#9EB5B9',
      image: require('../../../../images/coffee/Cold_Coffee.jpg'),
    },
    {
      name: 'Dark Roast',
      desc: 'Non cupidatat laborum dolore pariatur aliqua aute velit dolor culpa magna cupidatat in ut.',
      color: '#3E303C',
      image: require('../../../../images/coffee/Dark_roast.jpg'),
    },
    {
      name: 'Espresso Rush',
      desc: 'Proident ad incididunt ipsum proident anim ex voluptate anim in.',
      color: '#28302F',
      image: require('../../../../images/coffee/Espresso_Rush.jpg'),
    },
    {
      name: 'Golldenn',
      desc: 'Ut reprehenderit et magna enim.',
      color: '#372D20',
      image: require('../../../../images/coffee/Golldenn.jpg'),
    },
    {
      name: 'Hazelnut',
      desc: 'Cillum veniam reprehenderit irure cillum magna minim.',
      color: '#CBB498',
      image: require('../../../../images/coffee/Hazelnut.jpg'),
    },
    {
      name: 'Midnight',
      desc: 'In ex cupidatat sunt Lorem id consequat sit amet minim occaecat ea dolore.',
      color: '#454E5C',
      image: require('../../../../images/coffee/Midnight.jpg'),
    },
    {
      name: 'Skull Crusher',
      desc: 'Aliquip laborum fugiat cillum tempor ut consequat ex dolor qui.',
      color: '#151515',
      image: require('../../../../images/coffee/Skull_Crusher.jpg'),
    },
  ]);

  const [currentImage, updateCurrentImage] = useState(0);
  const [nextImage, updateNextImage] = useState(1);

  const selectedCoffee = allImages[nextImage];
  const image = useImage(require('../../../../images/tin-mockup.png'));
  const captain = useImage(allImages[currentImage].image);
  const next = useImage(allImages[nextImage].image);

  const currentRef = useRef(0);
  const gestureAnimated = useSharedValue(0);
  const animation = useSharedValue(0);
  const direction = useSharedValue(1);

  const animateToNext = (index: number) => {
    let nextIndex = index;

    if (currentImage === index) {
      return;
    }

    if (index < 0 || index > allImages.length) {
      nextIndex = currentImage;
    }

    direction.value = currentImage < nextIndex ? 1 : -1;
    updateNextImage(nextIndex);
    currentRef.current = nextIndex;

    animation.value = withTiming(
      2,
      {
        duration: 500,
        easing: Easing.linear,
      },
      finished => {
        if (finished) {
          runOnJS(updateCurrentImage)(nextIndex);
          animation.value = withDelay(100, withTiming(0, {duration: 0}));
        }
      },
    );
  };

  const toNext = () => {
    animateToNext(currentRef.current + 1);
  };

  const toPrevious = () => {
    animateToNext(currentRef.current - 1);
  };

  const panGesture = Gesture.Pan()
    .onBegin(() => {
      gestureAnimated.value = animation.value;
    })
    .onUpdate(({translationX}) => {
      const ratio = translationX / DeviceWidth;

      direction.value = ratio < 0 ? 1 : -1;
      animation.value = Math.abs(gestureAnimated.value + ratio);
    })
    .onEnd(() => {
      // Right to left swipe
      if (direction.value < 0) {
        runOnJS(toPrevious)();
      } else {
        runOnJS(toNext)();
      }
    });

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
            Extrapolate.CLAMP,
          )}deg`,
        },
      ],
    };
  });

  const opacityNext = useDerivedValue(() =>
    interpolate(animation.value, [1, 1.01], [0, 1], Extrapolate.CLAMP),
  );

  const animatedBGColor = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        animation.value,
        [0, 2],
        [
          `${allImages[currentImage].color}B3`,
          `${allImages[nextImage].color}B3`,
        ],
      ),
    };
  });

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View
        style={[
          {
            flex: 1,
            paddingVertical: 24,
            paddingBottom: 64,
          },
          animatedBGColor,
        ]}>
        <Animated.View
          style={[
            {
              flex: 1,
              marginTop: 50,
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

        <View
          style={{width: '100%', marginVertical: 50, paddingHorizontal: 24}}>
          <Text
            style={{
              color: getComplementaryColor(selectedCoffee.color),
              fontSize: 32,
              fontWeight: 'bold',
            }}>
            {selectedCoffee.name}
          </Text>

          <Text
            style={{
              color: getComplementaryColor(selectedCoffee.color),
              fontSize: 20,
              marginTop: 16,
            }}>
            {selectedCoffee.desc}
          </Text>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingLeft: 24, paddingRight: 24}}>
            {allImages?.map(({image}, index) => (
              <Pressable
                style={{width: 100, overflow: 'hidden', marginRight: 20}}
                onPress={() => {
                  animateToNext(index);
                }}>
                <RNImage style={{width: 300, height: 100}} source={image} />
              </Pressable>
            ))}
          </ScrollView>
        </View>
      </Animated.View>
    </GestureDetector>
  );
}
