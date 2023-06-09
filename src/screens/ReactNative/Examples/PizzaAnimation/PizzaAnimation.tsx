import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

import Styles from './styles';
import useAnimated from './useAnimated';
import SceneOne from './SceneOne/SceneOne';
import SceneTwo from './SceneTwo/SceneTwo';
import SceneThree from './SceneThree/SceneThree';

export default function PizzaAnimation() {
  const {animated, gestureHandler} = useAnimated();

  return (
    <View style={Styles.containerStyle}>
      <Animated.ScrollView
        onScroll={gestureHandler}
        contentContainerStyle={Styles.scrollView}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled>
        <SceneOne animated={animated} />

        <SceneTwo animated={animated} />

        <SceneThree animated={animated} />
      </Animated.ScrollView>
    </View>
  );
}
