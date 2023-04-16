import React from 'react';
import Animated, {
  SharedValue,
  useAnimatedScrollHandler,
} from 'react-native-reanimated';

export interface ICardRenderProps<T extends unknown> {
  animated: SharedValue<number>;
  scrollHandler: ReturnType<typeof useAnimatedScrollHandler>;

  data: Array<T>;

  render: (card: T, index: number) => React.ReactNode;
}

export default function CardRender<T = any>(props: ICardRenderProps<T>) {
  const {scrollHandler, data = [], render} = props;

  return (
    <Animated.ScrollView
      horizontal
      pagingEnabled
      onScroll={scrollHandler}
      overScrollMode="never"
      scrollEventThrottle={16}>
      {data.map((d, index) => render?.(d, index))}
    </Animated.ScrollView>
  );
}
