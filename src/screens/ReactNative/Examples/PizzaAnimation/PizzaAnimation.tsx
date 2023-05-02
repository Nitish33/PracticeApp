import React from 'react';
import {View} from 'react-native';
import Animated from 'react-native-reanimated';

import Styles from './styles';
import useAnimated from './useAnimated';
import SceneOne from './SceneOne/SceneOne';
import SceneTwo from './SceneTwo/SceneTwo';
import SceneThree from './SceneThree/SceneThree';

export default function PizzaAnimation() {
  const {gestureHandler} = useAnimated();

  return (
    <View style={Styles.containerStyle}>
      <Animated.ScrollView
        onScroll={gestureHandler}
        contentContainerStyle={Styles.scrollView}
        horizontal
        pagingEnabled>
        <SceneOne />

        <SceneTwo />

        <SceneThree />
      </Animated.ScrollView>
    </View>
  );
}
