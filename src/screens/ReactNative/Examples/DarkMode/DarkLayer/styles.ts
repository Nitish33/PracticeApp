import {StyleSheet} from 'react-native';

import {WIDTH, HEIGHT} from '../styles';

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
    flexDirection: 'row-reverse',
  },

  layer1: {
    position: 'absolute',
    left: 0,
    width: WIDTH - 100,
    height: HEIGHT,
    opacity: 0.5,
    borderRadius: HEIGHT,
    backgroundColor: '#7f7f7f',
  },

  layer2: {
    position: 'absolute',
    left: 0,
    width: WIDTH - 75,
    height: HEIGHT,
    opacity: 1,
    borderRadius: HEIGHT,
    backgroundColor: '#666666',
  },

  layer3: {
    position: 'absolute',
    left: 0,
    width: WIDTH - 50,
    height: HEIGHT,
    borderRadius: HEIGHT * 2,
    opacity: 0.7,
    backgroundColor: '#323232',
  },

  layer4: {
    position: 'absolute',
    left: 0,
    width: WIDTH,
    height: HEIGHT,
    borderRadius: HEIGHT,
    backgroundColor: '#000000',
  },

  cloudStyle: {
    width: '100%',
    height: '100%',
    marginTop: 20,
  },

  stars: {
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: '100%',
    tintColor: 'white',
  },
});

export default styles;
