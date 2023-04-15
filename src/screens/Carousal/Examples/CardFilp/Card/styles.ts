import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT, WINDOW_WIDTH} from '../../../../../utils/Constants';

import {LEFT_MARGIN, CONTENT_WIDTH, TOP_MARGIN} from '../styles';

const styles = StyleSheet.create({
  containerStyle: {
    overflow: 'hidden',
    width: WINDOW_WIDTH,
  },

  contentContainer: {
    left: LEFT_MARGIN,
    top: TOP_MARGIN - 20,
    width: CONTENT_WIDTH,
    height: 0.5 * WINDOW_HEIGHT,
    alignItems: 'center',
  },

  imageStyle: {
    width: 0.6 * WINDOW_WIDTH,
    height: 0.8 * WINDOW_WIDTH * (9 / 16),
  },

  titleStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },

  subTitleStyle: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 12,
  },

  moviesCount: {
    marginTop: 30,
    fontSize: 40,
    color: 'black',
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default styles;
