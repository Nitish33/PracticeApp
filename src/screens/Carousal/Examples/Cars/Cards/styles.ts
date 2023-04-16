import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../../../../utils/Constants';

const styles = StyleSheet.create({
  containerStyle: {
    width: WINDOW_WIDTH,
    height: '100%',
  },

  brand: {
    fontSize: 44,
    color: 'black',
    fontWeight: '900',
  },

  carName: {
    fontSize: 20,
    color: 'grey',
  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 8,
  },

  subTitle: {
    marginTop: 24,
    color: 'grey',
    fontSize: 16,
  },
});

export default styles;
