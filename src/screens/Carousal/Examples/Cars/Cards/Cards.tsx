import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {CarInterface} from '../../../CarsData';

import Styles from './styles';
import Animated, {SharedValue} from 'react-native-reanimated';
import useAnimated from './useAnimated';

export interface ICardsProps {
  car: CarInterface;
  index: number;
  animated: SharedValue<number>;
}

function Cards(props: ICardsProps) {
  const {car, index, animated} = props;

  const {carImageStyle, infoContainerAnimatedStyle} = useAnimated(
    animated,
    index,
  );

  return (
    <View style={Styles.containerStyle}>
      <View style={StyleSheet.absoluteFill}>
        <Animated.Image key={index} source={car.image} style={carImageStyle} />
      </View>

      <Animated.View
        style={[
          {flex: 1, zIndex: 10, padding: 24},
          infoContainerAnimatedStyle,
        ]}>
        <Animated.Text style={[Styles.brand]}>{car.brand}</Animated.Text>

        <Animated.Text style={[Styles.carName]}>{car.name}</Animated.Text>

        <Text style={Styles.subTitle}>Registration Number</Text>
        <Animated.Text style={[Styles.title]}>{car.registration}</Animated.Text>

        <Text style={Styles.subTitle}>Price</Text>
        <Animated.Text style={[Styles.title]}>{car.price}</Animated.Text>

        <Text style={[Styles.subTitle, {marginTop: 200}]}>Hub</Text>
        <Animated.Text style={[Styles.title]}>{car.hub}</Animated.Text>

        <Text style={Styles.subTitle}>Transmission</Text>
        <Animated.Text style={[Styles.title]}>{car.transmission}</Animated.Text>

        <Text style={Styles.subTitle}>Fuel</Text>
        <Animated.Text style={[Styles.title]}>{car.fuel}</Animated.Text>
      </Animated.View>
    </View>
  );
}

export default React.memo(Cards);
