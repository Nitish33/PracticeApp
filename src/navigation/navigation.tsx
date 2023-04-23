import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Listing, {ExampleList} from '../screens/Listing/Listing';
import {OptionType} from '../interfaces/Options';

const MainStackNavigator = createNativeStackNavigator();

const MainStack = () => {
  return (
    <MainStackNavigator.Navigator screenOptions={{headerShown: false}}>
      <MainStackNavigator.Screen name="Listing" component={Listing} />

      {ExampleList.map((option: OptionType) => {
        return (
          <MainStackNavigator.Screen
            key={option.key}
            name={option.key}
            component={option.component}
            options={{title: option.label}}
          />
        );
      })}
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
