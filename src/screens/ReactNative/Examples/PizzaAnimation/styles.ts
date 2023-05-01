import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../../../utils/Constants';

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'red',
  },

  scrollView: {
    width: 3 * WINDOW_WIDTH,
    backgroundColor: 'blue',
  },
});

export default styles;
