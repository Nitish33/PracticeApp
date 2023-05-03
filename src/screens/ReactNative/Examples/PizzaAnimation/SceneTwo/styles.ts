import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../../../../utils/Constants';

const styles = StyleSheet.create({
  containerStyle: {
    width: WINDOW_WIDTH,
    zIndex: 10,
  },

  contentContainerStyle: {
    flex: 1,
  },

  pizzaContainer: {
    marginTop: 100,
    flex: 1,
  },

  pizzaContentContainer: {
    height: 300,
    width: WINDOW_WIDTH * 0.8,
    marginLeft: WINDOW_WIDTH * 0.1,
  },

  pizzaStyle: {
    height: '100%',
    resizeMode: 'contain',
    width: '100%',
    transform: [{rotate: '0deg'}],
  },

  pizzaSliceStyle: {
    position: 'absolute',
    height: WINDOW_WIDTH * 0.4,
    width: WINDOW_WIDTH * 0.4,
    resizeMode: 'contain',
    left: WINDOW_WIDTH * 0.4,
    top: 70,
  },

  pizzaSliceLayerStyle: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  coffeeContainer: {
    position: 'absolute',
    top: 30,
    right: 100,
    backgroundColor: 'red',
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

  noodlesStyle: {
    position: 'absolute',
    width: 200,
    left: 0,
    bottom: -20,
    height: 200,
  },
});

export default styles;
