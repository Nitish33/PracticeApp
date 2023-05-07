import React from 'react';
import {Button, Text, View} from 'react-native';

import Styles from './styles';
import useAnimated from './useAnimated';
import {Languages} from './PopularityData';
import LanguageBar from './LanguageBar/LanguageBar';
import ReanimatedText from '../../../../Components/ReanimatedText/ReanimatedText';

export default function PopularityGraph() {
  const {yearAnimated, monthAndYear, startAnimation} = useAnimated();

  return (
    <View>
      <View style={[Styles.graphContainer]}>
        <Text style={Styles.xAxis}>Popularity</Text>

        <View style={Styles.yAxis}>
          <ReanimatedText value={monthAndYear} />

          <Text style={Styles.textStyle}>{'  '}Year</Text>
        </View>

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

      <View style={Styles.buttonContainerStyle}>
        <Button title="Start" onPress={startAnimation} />
      </View>
    </View>
  );
}
