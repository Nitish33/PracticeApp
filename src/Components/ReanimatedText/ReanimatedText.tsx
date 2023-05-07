import React from 'react';
import {TextInput, TextInputProps} from 'react-native';
import Animated, {SharedValue, useAnimatedProps} from 'react-native-reanimated';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export interface IReanimatedTextProps extends Omit<TextInputProps, 'value'> {
  value: SharedValue<number | string>;
}

export default function ReanimatedText(props: IReanimatedTextProps) {
  const {value, style, ...rest} = props;

  const textValue = useAnimatedProps(() => {
    return {
      text: `${value.value}`,
    } as any;
  }, []);

  return (
    <AnimatedTextInput
      animatedProps={textValue}
      editable={false}
      style={[{color: 'black', padding: 0}, style]}
      {...rest}
    />
  );
}
