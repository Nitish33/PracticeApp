import {CLOCK_SIZE} from './constants';

const C = CLOCK_SIZE / 2;

export const degToRadian = (angle: number) => {
  'worklet';
  return (angle * Math.PI) / 180;
};

export function getIndicatorPath(diameter: number, length: number) {
  return new Array(60)
    .fill(0)
    .map((_, index) => {
      const angle = index * 6;
      const angleInRadian = (angle * Math.PI) / 180;

      const minInterval = index % 5 === 0 ? 5 : 0;

      const s = {
        x: C + diameter * Math.sin(angleInRadian),
        y: C + diameter * Math.cos(angleInRadian),
      };

      const e = {
        x: C + (diameter - length - minInterval) * Math.sin(angleInRadian),
        y: C + (diameter - length - minInterval) * Math.cos(angleInRadian),
      };

      return `M${s.x} ${s.y} L${e.x} ${e.y}`;
    })
    .join(' ');
}
