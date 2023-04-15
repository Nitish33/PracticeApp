import {StyleSheet} from 'react-native';
import {WINDOW_WIDTH} from '../../../../utils/Constants';

export const CARD_DIMENSION = 200;
export const TOP_MARGIN = 100;
export const LEFT_MARGIN = 50;
export const CONTENT_WIDTH = 0.7 * WINDOW_WIDTH;

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'aqua',
  },
});

export default styles;
