import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Listing from './';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Gesture Handler Example" component={Listing} />
    </Stack.Navigator>
  );
};

export default Routes;
