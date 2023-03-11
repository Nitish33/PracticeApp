import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Listing from '../screens/Listing/Listing';
import GestureHandlerExample from '../screens/GestureHandlerExample/routes';

const MainStackNavigator = createNativeStackNavigator();

const MainStack = () => {
  return (
    <MainStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <MainStackNavigator.Screen name="Listing" component={Listing} />

      <MainStackNavigator.Screen
        name="GestureHandler"
        component={GestureHandlerExample}
      />
    </MainStackNavigator.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigator;
