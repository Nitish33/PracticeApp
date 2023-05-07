import {StyleSheet} from 'react-native';
import {Languages} from './PopularityData';

const ChartHeight = Languages.length * 60 - 30;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
  },

  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  graphContainer: {
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderColor: 'black',
    margin: 20,
    height: ChartHeight,
  },

  xAxis: {
    color: 'black',
    position: 'absolute',
    width: ChartHeight,
    left: -ChartHeight / 2 - 16,
    transform: [{rotate: '-90deg'}],
  },

  yAxis: {
    color: 'black',
    position: 'absolute',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    bottom: -30,
  },

  buttonContainerStyle: {
    margin: 20,
    marginTop: 50,
  },
});

export default styles;
