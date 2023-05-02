import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../../../../utils/Constants';

const styles = StyleSheet.create({
  containerStyle: {
    width: WINDOW_WIDTH,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },

  pizzaStyle: {
    height: 300,
    position: 'absolute',
    resizeMode: 'contain',
    width: WINDOW_WIDTH * 0.8,
    transform: [{rotate: '10deg'}],
    zIndex: 10,
  },

  pizzaSliceStyle: {
    position: 'absolute',
    height: WINDOW_WIDTH * 0.4,
    width: WINDOW_WIDTH * 0.4,
    resizeMode: 'contain',
    left: WINDOW_WIDTH / 2,
    transform: [{rotate: '5deg'}],
  },
});

export default styles;
