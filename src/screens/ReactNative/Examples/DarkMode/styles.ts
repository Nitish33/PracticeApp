import {StyleSheet} from 'react-native';

export const WIDTH = 200;
export const HEIGHT = 75;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  toggleContainer: {
    width: WIDTH,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: 'white',
    height: HEIGHT,
    borderRadius: HEIGHT,
    elevation: 10,
  },

  toggleContentContainer: {
    width: '200%',
    height: '100%',
    flexDirection: 'row',
  },
});

export default styles;
