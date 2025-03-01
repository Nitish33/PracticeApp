import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {CARD_SIZE} from './styles';
import Card from './Card';
import Background from './Background';

// @refresh reset
export default function T3DCarousal() {
  const [cards] = useState<Array<ReturnType<typeof require>>>([
    require('../../../../images/deadpool.jpg'),
    require('../../../../images/groot.jpg'),
    require('../../../../images/black_panthoor.jpg'),
    require('../../../../images/black_widow.jpg'),
    require('../../../../images/captain_america.jpeg'),
    require('../../../../images/captain_marvel.jpg'),
    require('../../../../images/deadpool.jpg'),
    require('../../../../images/groot.jpg'),
    require('../../../../images/black_panthoor.jpg'),
    require('../../../../images/black_widow.jpg'),
    require('../../../../images/captain_america.jpeg'),
    require('../../../../images/captain_marvel.jpg'),
  ]);

  const zoomAnimated = useSharedValue(0.7);

  const animated = useSharedValue(0);

  const zoomIn = () => {
    zoomAnimated.value = withTiming(Math.min(zoomAnimated.value + 0.1, 1), {
      duration: 500,
      easing: Easing.linear,
    });
  };

  const zoomOut = () => {
    zoomAnimated.value = withTiming(Math.max(zoomAnimated.value - 0.1, 0.2), {
      duration: 500,
      easing: Easing.linear,
    });
  };

  const zoomAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: zoomAnimated.value}],
    };
  });

  useEffect(() => {
    animated.value = withRepeat(
      withTiming(6, {duration: 10000, easing: Easing.linear}),
      -1,
      false,
    );
  }, []);

  const bgImages = useMemo(() => {
    return [cards[0]].concat(cards.slice(1).reverse());
  }, [cards]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}>
      <View style={[StyleSheet.absoluteFill]}>
        {bgImages?.map((item, index) => {
          return <Background animated={animated} image={item} index={index} />;
        })}
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <Animated.View
          style={[
            {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            },
            zoomAnimatedStyle,
          ]}>
          {cards?.map((item, index) => {
            return <Card index={index} animated={animated} image={item} />;
          })}
        </Animated.View>
      </View>

      <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
        <Pressable
          onPress={zoomIn}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 70,
            paddingBottom: 10,
            backgroundColor: 'grey',
          }}>
          <Text>Zoom In</Text>
        </Pressable>

        <Pressable
          onPress={zoomOut}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: 70,
            paddingBottom: 10,
            backgroundColor: 'grey',
          }}>
          <Text>Zoom In</Text>
        </Pressable>
      </View>
    </View>
  );
}
