import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Listing, {ExamplesList} from './';
import {OptionType} from '../../interfaces/Options';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Carousal Example" component={Listing} />

      {ExamplesList.map((option: OptionType) => {
        return (
          <Stack.Screen
            key={option.key}
            name={option.key}
            component={option.component}
            options={{title: option.label, headerShown: false}}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default Routes;
