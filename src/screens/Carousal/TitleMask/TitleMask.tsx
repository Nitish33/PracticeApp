import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import CardRender from '../Components/CardRender/CardRender';
import useScrollAnimated from '../useScrollAnimated';
import {CarousalData} from '../Data';
import Card from './Card/Card';

import Styles from './styles';
import MaskedView from '@react-native-masked-view/masked-view';

export default function TitleMask() {
  const {animated, scrollHandler} = useScrollAnimated();

  return (
    <View style={{flex: 1}}>
      <View style={StyleSheet.absoluteFill}>
        <CardRender
          data={CarousalData}
          animated={animated}
          scrollHandler={scrollHandler}
          render={(data, index) => {
            return <Card key={index} data={data} />;
          }}
        />
      </View>

      <MaskedView maskElement={<View></View>}>
        <Text style={Styles.titleStyle}>Change Wallpaper</Text>
      </MaskedView>
    </View>
  );
}
