import {StyleSheet} from 'react-native';

import {HEIGHT} from '../styles';

export const Size = HEIGHT - 10;

const styles = StyleSheet.create({
  containerStyle: {
    width: Size,
    height: Size,
    flexDirection: 'row',
    margin: 5,
    borderRadius: Size,
    overflow: 'hidden',
    position: 'absolute',
    backgroundColor: 'white',
  },

  imageContainerStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },

  sun: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default styles;
