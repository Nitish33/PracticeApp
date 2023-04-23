import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH, WINDOW_HEIGHT} from '../../src/utils/Constants';

export const CARD_WIDTH = WINDOW_WIDTH - 48;
export const CARD_HEIGHT = (CARD_WIDTH * 16) / 9;
export const AVATAR_SIZE = 50;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },

  cardContainerStyle: {
    width: WINDOW_WIDTH,
    overflow: 'hidden',
    paddingHorizontal: 24,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  frameStyle: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,

    borderWidth: 10,
    overflow: 'hidden',
    borderColor: 'white',
    backgroundColor: 'white',
  },

  imageStyle: {
    width: WINDOW_WIDTH,
    height: '100%',
    borderRadius: 12,
  },

  avatorStyle: {
    position: 'absolute',
    bottom: (WINDOW_HEIGHT - CARD_HEIGHT) / 2 - AVATAR_SIZE,
    right: AVATAR_SIZE,
  },
});

export default styles;
