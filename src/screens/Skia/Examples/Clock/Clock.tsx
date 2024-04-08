import React, {useEffect} from 'react';

import {
  Group,
  Canvas,
  Circle,
  Shadow,
  SweepGradient,
  RadialGradient,
  LinearGradient,
  Vertices,
  vec,
  Text,
  useFont,
} from '@shopify/react-native-skia';
import {
  Easing,
  SharedValue,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Platform, ScrollView, View} from 'react-native';

const LIGHT_SHADOW = '#FFFFFF7F';
const DARK_SHADOW = '#16192426';

const DARK_SHADOW_33 = '#16192433';

const DIAL_FACE = '#EFF2F7';

const Dot = new Array(12).fill(0).map((_, index) => index);

function toRad(degree: number) {
  'worklet';
  return 0.0174 * degree;
}

const CENTER = {x: 200, y: 200};

function HourHand(props: {
  hours: SharedValue<number>;
  minute: SharedValue<number>;
}) {
  const {hours, minute} = props;
  const totalAngle = useDerivedValue(
    () => (hours.value + minute.value / 60) * 30,
  );

  const xPos = useDerivedValue(
    () => 200 + 100 * Math.sin(toRad(totalAngle.value)),
  );
  const yPos = useDerivedValue(
    () => 200 - 100 * Math.cos(toRad(totalAngle.value)),
  );

  const rotation = useDerivedValue(() => {
    return [{rotate: toRad(totalAngle.value)}];
  });

  return (
    <Vertices
      vertices={[vec(190, 200), vec(200, 140), vec(210, 200)]}
      origin={{x: 200, y: 200}}
      transform={rotation}>
      <LinearGradient
        start={{x: 200, y: 220}}
        end={{x: yPos.value, y: xPos.value}}
        colors={['#0D8AFC', '#33F0B0']}
      />
    </Vertices>
  );
}

function MinHand(props: {minute: SharedValue<number>}) {
  const {minute} = props;
  const angle = useDerivedValue(() => {
    console.log('derived value', minute.value);
    return minute.value * 6;
  });

  const xPos = useDerivedValue(() => 200 + 100 * Math.sin(toRad(angle.value)));
  const yPos = useDerivedValue(() => 200 - 100 * Math.cos(toRad(angle.value)));

  const rotation = useDerivedValue(() => {
    return [{rotate: toRad(angle.value)}];
  });

  return (
    <Vertices
      vertices={[vec(190, 200), vec(200, 100), vec(210, 200)]}
      origin={{x: 200, y: 200}}
      transform={rotation}>
      <LinearGradient
        start={{x: 200, y: 220}}
        end={{x: xPos.value, y: yPos.value}}
        colors={['#0D8AFC', '#33F0B0']}
      />
    </Vertices>
  );
}

function ClockFace() {
  const timer = useSharedValue(0);

  const hour = useDerivedValue(() => Math.floor(timer.value / 60));
  const minute = useDerivedValue(() => timer.value % 60);

  useEffect(() => {
    timer.value = withTiming(60 * 12, {
      duration: 1000 * 60,
      easing: Easing.linear,
    });
  }, []);

  return (
    <>
      <Circle c={{x: 200, y: 200}} r={120} color={'#EFF2F7'} style={'fill'}>
        <Shadow inner dx={-8} dy={-8} color={LIGHT_SHADOW} blur={5} />
        <Shadow inner dx={8} dy={8} color={DARK_SHADOW} blur={5} />

        <Shadow dx={-4} dy={-4} color={'white'} blur={4} />
        <Shadow dx={4} dy={4} color={DARK_SHADOW} blur={4} />
      </Circle>

      <Circle c={{x: 200, y: 200}} r={80} color={'#EFF2F7'} style={'fill'}>
        <Shadow dx={10} dy={10} blur={15} color={'#16192433'} />

        <SweepGradient
          c={{x: 200, y: 200}}
          start={0}
          end={100}
          colors={[DIAL_FACE, '#C9D2E266', DIAL_FACE]}
        />
      </Circle>

      {(Dot ?? []).map((_, index) => {
        return (
          <Circle
            key={index}
            c={CENTER}
            r={4}
            color={'#BDBDBD'}
            transform={[
              {translateX: 100 * Math.sin(index * 30 * 0.0174)},
              {translateY: -100 * Math.cos(index * 30 * 0.0174)},
            ]}
          />
        );
      })}

      <Circle c={CENTER} r={50} color={DIAL_FACE} />

      <MinHand minute={minute} />

      <HourHand hours={hour} minute={minute} />

      <Circle c={CENTER} r={20} color={DIAL_FACE}>
        <Shadow dx={4} dy={4} blur={10} color={DARK_SHADOW_33} />
      </Circle>

      <Circle c={CENTER} r={10} color={DIAL_FACE}>
        <LinearGradient
          start={{x: 190, y: 200}}
          end={{x: 210, y: 215}}
          colors={['#0D8AFC', '#33F0B0']}
        />
      </Circle>
    </>
  );
}

const Repeat = new Array(1).fill(0);

export default function Clock() {
  const font = useFont('arial');

  console.log('font is', font);

  return (
    <View style={{flex: 1}}>
      <ScrollView style={{backgroundColor: '#E9ECF5'}}>
        <Canvas style={{width: '100%', height: 400}}>
          <ClockFace />

          {/* <Text x={100} y={32} text="Hello World" font={font} color={'red'} /> */}
        </Canvas>
      </ScrollView>
    </View>
  );
}
