import {StyleSheet} from 'react-native';

export const Radius = 60;
export const Stroke = 20;
export const Circumference = 2 * Math.PI * Radius;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
