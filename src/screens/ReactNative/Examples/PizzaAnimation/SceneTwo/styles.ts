import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../../../../utils/Constants';

const styles = StyleSheet.create({
  containerStyle: {
    width: WINDOW_WIDTH,
  },

  contentContainerStyle: {
    flex: 1,
  },

  pizzaContainer: {
    marginTop: 100,
    flex: 1,
  },

  pizzaStyle: {
    height: 300,
    position: 'absolute',
    resizeMode: 'contain',
    left: WINDOW_WIDTH * 0.1,
    width: WINDOW_WIDTH * 0.8,
    transform: [{rotate: '10deg'}],
    zIndex: 10,
  },

  pizzaSliceStyle: {
    position: 'absolute',
    height: WINDOW_WIDTH * 0.4,
    width: WINDOW_WIDTH * 0.4,
    resizeMode: 'contain',
    left: WINDOW_WIDTH / 2 - 5,
    top: 70,
  },
});

export default styles;
