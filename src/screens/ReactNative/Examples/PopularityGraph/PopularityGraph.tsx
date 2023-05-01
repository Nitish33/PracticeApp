import React from 'react';
import {View} from 'react-native';

import useAnimated from './useAnimated';
import {Languages} from './PopularityData';
import LanguageBar from './LanguageBar/LanguageBar';

export default function PopularityGraph() {
  const {yearAnimated} = useAnimated();

  return (
    <View>
      {Languages.map((language, index) => {
        return (
          <LanguageBar
            index={index}
            key={language}
            language={language}
            animated={yearAnimated}
          />
        );
      })}
    </View>
  );
}
