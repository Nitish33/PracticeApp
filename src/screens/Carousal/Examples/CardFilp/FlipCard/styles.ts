import {StyleSheet} from 'react-native';
import {WINDOW_HEIGHT} from '../../../../../utils/Constants';

import {LEFT_MARGIN, CONTENT_WIDTH, TOP_MARGIN} from '../styles';

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: 'white',
    position: 'absolute',
    width: CONTENT_WIDTH,
    height: 0.5 * WINDOW_HEIGHT,
    left: LEFT_MARGIN,
    top: TOP_MARGIN,
  },
});

export default styles;
