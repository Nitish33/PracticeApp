import {StyleSheet} from 'react-native';
import {CLOCK_SIZE} from '../constants';

const styles = StyleSheet.create({
  containerStyle: {
    width: CLOCK_SIZE,
    height: CLOCK_SIZE,
  },

  indicatorStyle: {
    width: CLOCK_SIZE,
    height: CLOCK_SIZE,
    position: 'absolute',
  },
});

export default styles;
