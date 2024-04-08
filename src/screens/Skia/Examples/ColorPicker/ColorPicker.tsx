import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {
  Canvas,
  Fill,
  Shader,
  Skia,
  useClockValue,
  useComputedValue,
} from '@shopify/react-native-skia';

const shader = Skia.RuntimeEffect.Make(`

uniform vec2 u_resolution;
uniform float u_time;

float Radius = 0.8;

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);

}

vec2 normalizeCoords(vec2 pos) {
    vec2 uv =  2.0 * pos/u_resolution -1.0;
    uv.x *= u_resolution.x/u_resolution.y;

    return uv;
}

vec4 main(vec2 pos) 
{
     vec2 uv = normalizeCoords(pos);
     
     float d = length(uv);
     float color = step(d, Radius);

     float angle = atan(uv.y, uv.x)*0.5/3.141592653589793 ;
     float u = 1/0.5 * sqrt(uv.x * uv.x +  uv.y * uv.y);
     u *= u ;

     vec3 hua = vec3(angle, u, 1.0);
    vec3 c = hsv2rgb(hua) * color;


    return vec4(c, 1);
}
`);

const Width = Dimensions.get('window').width;
const Height = Width;

export default function ColorPicker() {
  const timer = useClockValue();

  const uniform = useComputedValue(() => {
    return {
      u_resolution: {x: Width, y: Height},
      u_time: timer.current / 1000,
    };
  }, [timer]);

  if (!shader) {
    return null;
  }

  return (
    <View>
      <Canvas style={{width: Width, height: Height}}>
        <Fill>
          <Shader source={shader} uniforms={uniform} />
        </Fill>
      </Canvas>
    </View>
  );
}
