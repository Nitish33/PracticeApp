import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../../../../utils/Constants';

const styles = StyleSheet.create({
  containerStyle: {
    width: WINDOW_WIDTH,
  },

  contentContainerStyle: {
    flex: 1,
  },

  fruitsImageStyle: {
    width: 400,
    height: 400,
    marginLeft: -200,
    position: 'absolute',
    marginTop: WINDOW_HEIGHT / 2 - 250,
  },

  momosImageStyle: {
    position: 'absolute',
    width: 300,
    height: 300,
    marginTop: -120,
    marginLeft: -50,
    resizeMode: 'contain',
  },

  dryFruitsStyle: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
    position: 'absolute',
    marginTop: 400,
    marginLeft: WINDOW_WIDTH * 0.6,
  },
});

export default styles;
