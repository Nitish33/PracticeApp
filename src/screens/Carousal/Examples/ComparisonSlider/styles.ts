import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../../../utils/Constants';

export const CARD_WIDTH = 0.9 * WINDOW_WIDTH;
export const CARD_HEIGHT = 1.5 * CARD_WIDTH;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    borderRadius: 12,
    elevation: 10,
    flexDirection: 'row',
    borderColor: 'white',
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    // backgroundColor: 'red',
  },

  comparisonBox: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    flexDirection: 'row',
  },

  imageContainer: {
    width: '100%',
    height: '100%',
  },

  imageStyle: {
    width: CARD_WIDTH,
    height: '100%',
    resizeMode: 'cover',
  },

  thumb: {
    width: 30,
    zIndex: 100,
    position: 'absolute',
    justifyContent: 'center',
    height: 50,
    backgroundColor: 'white',
  },
});

export default styles;
