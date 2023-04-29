import {StyleSheet} from 'react-native';

import {WIDTH, HEIGHT} from '../styles';

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  layer1: {
    position: 'absolute',
    left: 0,
    width: WIDTH - 100,
    height: HEIGHT,
    opacity: 0.5,
    borderRadius: HEIGHT,
    backgroundColor: '#a0d9ef',
  },

  layer2: {
    position: 'absolute',
    left: 0,
    width: WIDTH - 50,
    height: HEIGHT,
    opacity: 1,
    borderRadius: HEIGHT,
    backgroundColor: '#62c1e5',
  },

  layer3: {
    position: 'absolute',
    left: 0,
    width: WIDTH - 25,
    height: HEIGHT,
    borderRadius: HEIGHT * 2,
    opacity: 0.7,
    backgroundColor: '#20a7db',
  },

  layer4: {
    position: 'absolute',
    left: 0,
    width: WIDTH,
    height: HEIGHT,
    opacity: 0.7,
    borderRadius: HEIGHT,
    backgroundColor: '#1c96c5',
  },

  cloudStyle: {
    width: '100%',
    height: '100%',
    marginTop: 20,
  },
});

export default styles;
