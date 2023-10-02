import {View, Text} from 'react-native';
import React from 'react';
import {
  Canvas,
  Circle,
  Group,
  LinearGradient,
  Paint,
  vec,
  RoundedRect,
  Rect,
  RadialGradient,
  useImage,
  Image,
  Blur,
  DisplacementMap,
  Turbulence,
  ColorMatrix,
} from '@shopify/react-native-skia';
import Images from '../../../../images/images';

// import {pi } Pizza from '../../../../images';

export default function SkiaBasic() {
  const pizzaImage = useImage(Images.DeadPool);

  const value = vec(10, 20);
  console.log('value is', value);

  const displacementFrequency = 1000;

  return (
    <Canvas style={{flex: 1}}>
      <Group color={'green'} style={'stroke'}>
        <Circle
          cx={50}
          cy={50}
          r={20}
          color={'red'}
          style={'stroke'}
          strokeWidth={10}
        />
        <Circle cx={150} cy={50} r={20}>
          <Paint color={'blue'} style={'stroke'} strokeWidth={10} />
        </Circle>
      </Group>

      <Group>
        <Circle cx={200} cy={300} r={100}>
          <Paint color="lightblue" />
          <Paint color="green" style="stroke" strokeWidth={100} />
          <Paint color="#ade6d8" style="stroke" strokeWidth={100 / 2} />
        </Circle>
      </Group>

      <Group>
        <Circle cx={3 * 50} cy={3 * 50} r={50}>
          <RadialGradient
            c={vec(3 * 50, 3 * 50)}
            r={50}
            colors={['red', 'pink']}
            positions={[0, 1]}
          />
        </Circle>
      </Group>

      <Rect x={100} y={400} width={256} height={256}>
        <LinearGradient
          start={vec(100, 400)}
          end={vec(256 + 100, 600 + 256)}
          colors={['blue', 'yellow']}
        />
      </Rect>

      <Image
        x={0}
        y={0}
        fit="cover"
        width={300}
        height={300}
        image={pizzaImage}>
        {/* <Blur blur={20} mode={'clamp'} /> */}
        {/* <DisplacementMap channelX="g" channelY="a" scale={20}>
          <Turbulence
            freqX={displacementFrequency}
            freqY={displacementFrequency}
            octaves={1}
            seed={1}
          />
        </DisplacementMap> */}

        <ColorMatrix
          matrix={[
            0.5, 0.5, 0.5, 0.0, 0.0, 0.5, 0.5, 0.5, 0.0, 0.0, 0.5, 0.5, 0.5,
            0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0,
          ]}
        />
      </Image>
    </Canvas>
  );
}
