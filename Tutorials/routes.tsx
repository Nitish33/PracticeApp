import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Listing, {TutorialList} from './';
import {OptionType} from '../src/interfaces/Options';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Youtube Tutorials" component={Listing} />

      {TutorialList.map((option: OptionType) => {
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

export default Routes;
