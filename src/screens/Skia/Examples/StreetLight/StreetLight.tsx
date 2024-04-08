import {View, Text, Dimensions} from 'react-native';
import React from 'react';
import {
  Canvas,
  Fill,
  Shader,
  Skia,
  useComputedValue,
} from '@shopify/react-native-skia';

const source = Skia.RuntimeEffect.Make(`

    uniform vec2 u_resolution;

    float remap01(float a, float b, float t) {
        return clamp((t-a)/(b-a), 0.0, 1.0);
    }

    vec2 normalizeCoords(vec2 pos, vec2 container) {
        vec2 uv =  pos.xy/container.xy * 2 - 1.0;
        uv.x *= container.x/container.y;

        return uv;
    }

    float lineSegment(in vec2 p, in vec2 a, in vec2 b) {
        vec2 ba = b - a;
        vec2 pa = p - a;
        float h = clamp(dot(pa, ba) / dot(ba, ba), 0., 1.);
        float len =  length(pa - h * ba);

        return smoothstep(.0, 0.01, abs(len));
    }

    float sdVerticalCapsule(in vec2 startPoint,in vec2 endPoint, in vec2 p,in float r ) {
        float height = endPoint.y - startPoint.y; 
        p.y -= clamp( p.y, 0.0, height );

        float m  = (endPoint.y - startPoint.y) / (endPoint.x - startPoint.x);
        

        // p.x = p.y * m;

        return smoothstep(0.0, .005, length(p) - r);        
    }

    vec4 drawPoll(in vec2 pos) {

        float len = length(pos);

        // pos.y += 0.;

        len = step(0.2, len);

        float l = sdVerticalCapsule(vec2(0.5, -0.2), vec2(-0.5, 0.5), vec2(pos), 0.05);

        return vec4(1.0 , 0.0, 0., l);
    }

    vec4 main(vec2 pos) {
        vec2 uv = normalizeCoords(pos, u_resolution);

        // vec4 color = vec4(0., 1., 1., 1.0);

        vec4 poll = drawPoll(vec2(uv.x, uv.y));



        return poll;
    }
`);

const {width} = Dimensions.get('screen');
const height = Dimensions.get('screen').height - 100;

export default function StreetLight() {
  const uniforms = useComputedValue(() => {
    return {
      u_resolution: {x: width, y: height},
    };
  }, []);

  if (!source) {
    return <Text> Error </Text>;
  }

  return (
    <Canvas style={{width, height}}>
      <Fill>
        <Shader source={source} uniforms={uniforms} />
      </Fill>
    </Canvas>
  );
}
