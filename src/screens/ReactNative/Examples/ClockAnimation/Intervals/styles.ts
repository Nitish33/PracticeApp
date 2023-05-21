import {StyleSheet} from 'react-native';
import {CLOCK_SIZE} from '../constants';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },
  indicatorStyle: {
    width: CLOCK_SIZE,
    height: CLOCK_SIZE,
    position: 'absolute',
  },

  textStyle: {
    fontWeight: 'bold',
    color: 'white',
    width: 20,
    height: 20,
    position: 'absolute',
  },
});

export default styles;
