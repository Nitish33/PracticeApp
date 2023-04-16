import {useState} from 'react';
import {LayoutChangeEvent, LayoutRectangle} from 'react-native';

export default function useLayout() {
  const [layout, updateLayout] = useState<LayoutRectangle>({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const onLayout = (data: LayoutChangeEvent) => {
    updateLayout(data.nativeEvent.layout);
  };

  return {onLayout, layout};
}
