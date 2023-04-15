import {SharedValue} from 'react-native-reanimated';

import {CarousalInterface} from '../Data';

export interface ICardProps {
  index: number;
  card: CarousalInterface;
  animated: SharedValue<number>;
}
