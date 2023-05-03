import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../../../../utils/Constants';

const styles = StyleSheet.create({
  containerStyle: {
    width: WINDOW_WIDTH,
  },

  contentContainerStyle: {
    flex: 1,
  },

  tableStyle: {
    position: 'absolute',
    width: WINDOW_WIDTH + 100,
    height: 0.7 * WINDOW_HEIGHT,
  },

  plateStyle: {
    width: 300,
    height: 300,
    position: 'absolute',
    resizeMode: 'contain',
    top: WINDOW_HEIGHT / 6,
    left: WINDOW_WIDTH / 6,
  },

  coffeeContainer: {
    position: 'absolute',
    top: WINDOW_HEIGHT / 2 + 50,
    left: 20,
  },

  coffeeCup: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
    position: 'absolute',
  },

  coffeeTexture: {
    width: 50,
    height: 50,
    left: 19,
    top: 16,
    position: 'absolute',
    transform: [{rotate: '0deg'}],
  },
});

export default styles;
