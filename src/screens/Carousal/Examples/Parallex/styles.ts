import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const WINDOW_HEIGHT = height;
export const WINDOW_WIDTH = width;
export const CARD_WIDTH = width - 48;
export const CARD_HEIGHT = (CARD_WIDTH * 16) / 9;
export const AVATAR_SIZE = 50;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
  },

  cardContainerStyle: {
    width: width,
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
    width: width,
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
