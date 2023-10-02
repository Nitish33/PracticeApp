import {View, Dimensions} from 'react-native';
import React from 'react';
import {
  Canvas,
  Fill,
  Skia,
  Shader as SkiaShader,
  useClockValue,
  useComputedValue,
  useValue,
  useValueEffect,
} from '@shopify/react-native-skia';

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = 500;

const source = Skia.RuntimeEffect.Make(`
    uniform vec2 u_resolution;
    uniform float u_time;


    float electron(vec2 pos) {
        float d = length(pos); 
        d = d + sin(u_time + 3.14 * 0.5) * 0.005;
        d = smoothstep(0.11, 0.12, d);

        return d;
    }


    vec4 main(vec2 pos) 
    {
        vec2 uv = 2.0 * pos/u_resolution - 1.0;
        uv.x *= u_resolution.x/u_resolution.y;

        vec2 sd = uv;

        bool behind = mod(floor((u_time - 2) * 0.5), 3) == 0;

        uv.x += sin(u_time) * 0.5;
        uv.y += sin(u_time) * 0.5;

        float e1 = electron(uv);
    

        vec4 color = vec4(1.0, 0., 0., 1.);

       

        float cd = length(sd);
        cd = smoothstep(0.2, 0.19, cd);
        vec4 center = vec4(0);

        if(behind) {
            if(cd == e1) {
                center = mix(center, vec4(1, 1, 1, 1), cd);
            } else {
                center = mix(center, vec4(1, 0, 0, 1), cd);
            }
        } else {
            center = mix(center, vec4(1, 1, 1, 1), cd);
        }

        
        color = mix(color, vec4(0., 0., 0, 1), e1);
        color += center;


        return color;
    }
`);

export default function Shader() {
  const time = useClockValue();

  const u_time = useValue(0);

  useValueEffect(time, () => {
    u_time.current = time.current / 1000;
  });

  const uniforms = useComputedValue(() => {
    return {
      u_resolution: {x: WIDTH, y: HEIGHT},
      u_time: u_time.current,
    };
  }, [time]);

  if (!source) {
    return null;
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Canvas style={{width: WIDTH, height: HEIGHT}}>
        <Fill>
          <SkiaShader source={source} uniforms={uniforms} />
        </Fill>
      </Canvas>
    </View>
  );
}
