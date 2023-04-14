import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Listing, {ExampleList} from '.';
import {OptionType} from '../../interfaces/Options';

const Stack = createNativeStackNavigator();

const ReactNativeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="React Native Example" component={Listing} />
      {ExampleList.map((option: OptionType) => {
        return (
          <Stack.Screen
            key={option.key}
            name={option.key}
            component={option.component}
            options={{title: option.label}}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default ReactNativeStack;
