import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../../../../utils/Constants';

const styles = StyleSheet.create({
  containerStyle: {
    width: WINDOW_WIDTH,
  },

  contentContainerStyle: {
    flex: 1,
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
    top: WINDOW_HEIGHT / 2,
    left: 20,
  },

  coffeeCup: {
    width: 100,
    height: 90,
    resizeMode: 'contain',
    position: 'absolute',
  },

  coffeeTexture: {
    width: 55,
    height: 55,
    left: 22,
    top: 15,
    position: 'absolute',
    transform: [{rotate: '0deg'}],
  },
});

export default styles;
