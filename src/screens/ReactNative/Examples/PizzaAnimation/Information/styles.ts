import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../../../../utils/Constants';

const styles = StyleSheet.create({
  containerStyle: {
    zIndex: 10,
    height: 0.4 * WINDOW_WIDTH,
  },

  textStyle: {
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
  },

  lableStyle: {
    textTransform: 'capitalize',
    fontSize: 16,
    color: 'gray',
  },

  titleStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 12,
  },

  messageStyle: {
    fontSize: 20,
    color: 'gray',
    marginHorizontal: 20,
    marginTop: 12,
  },
});

export default styles;
