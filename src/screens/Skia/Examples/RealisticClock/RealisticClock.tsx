import {View} from 'react-native';
import React, {useEffect} from 'react';
import {
  Blur,
  Canvas,
  Circle,
  DashPathEffect,
  Fill,
  FitBox,
  Text,
  Group,
  Line,
  LinearGradient,
  Mask,
  Paint,
  Path,
  RoundedRect,
  Shadow,
  rect,
  vec,
  useFont,
  ColorMatrix,
} from '@shopify/react-native-skia';
import {
  Easing,
  SharedValue,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const SIZE = 295;
const CENTER = SIZE / 2;

const CANVAS_SIZE = 400;
const CANVAS_CENTER = CANVAS_SIZE / 2;

const TIME = ['12', '3', '6', '9'];

function toRad(degree: number) {
  'worklet';
  return 0.0174 * degree;
}

function Lines() {
  return (
    <Group>
      <Shadow dx={0} dy={0.8} blur={0} color={'#FFFFFF'} />
      <Shadow dx={0} dy={0.8} blur={1.75} color={'#000'} inner />

      <Circle
        c={{x: CENTER, y: CENTER}}
        r={100}
        color={'#9BA0A3'}
        style={'stroke'}
        strokeWidth={8}>
        <DashPathEffect intervals={[1.75, 8.71]} />
      </Circle>

      <Circle
        c={{x: CENTER, y: CENTER}}
        r={96}
        color={'#9BA0A3'}
        style={'stroke'}
        strokeWidth={18}>
        <DashPathEffect intervals={[4, 46]} />
      </Circle>
    </Group>
  );
}

function BottomLight() {
  return (
    <Mask
      mask={
        <FitBox src={rect(0, 0, 295, 295)} dst={rect(60, 210, 300, 300)}>
          <Path
            path={
              'M71.7265 22.0552C54.2265 23.4552 29.4348 42.4719 19.2265 51.8052C18.0598 54.7219 16.4265 61.7802 19.2265 66.6802C22.7265 72.8052 40.2265 78.0552 71.7265 83.3052C103.227 88.5552 121.602 85.9302 139.977 83.3052C158.352 80.6802 187.227 68.4302 195.977 54.4302C204.727 40.4302 195.102 36.9302 187.227 29.0552C179.352 21.1802 167.977 17.6802 158.352 17.6802C148.727 17.6802 133.852 22.0552 115.477 22.0552C97.1015 22.0552 93.6015 20.3052 71.7265 22.0552Z'
            }>
            <Blur blur={10} />
          </Path>
        </FitBox>
      }>
      <Circle
        c={{x: CENTER, y: CENTER}}
        r={120}
        color={'white'}
        opacity={0.5}
      />
    </Mask>
  );
}

function RectBackground() {
  return (
    <Group key={'background'}>
      <RoundedRect
        x={0}
        y={0}
        width={295}
        height={295}
        r={40}
        color={'#171719'}
      />

      <RoundedRect x={0} y={0} width={295} height={295} r={40} opacity={0.2}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 0, y: 295}}
          colors={['#FFFFFF', '#18181A']}
        />
      </RoundedRect>
    </Group>
  );
}

function TimerText() {
  const font = useFont(require('../../../../../assets/Inter-Regular.ttf'), 28);

  return (
    <Group>
      <Shadow dy={1.75} dx={0} blur={1.74} color={'#000000'} inner />
      <Shadow dy={1.75} dx={0} blur={0} color={'#FFFFFF'} />
      {(TIME ?? []).map((value, index) => (
        <Text
          x={CENTER - 15}
          y={CENTER + 10}
          text={value}
          font={font}
          color={'#9BA0A3'}
          transform={[
            {translateX: 65 * Math.sin((index * Math.PI) / 2)},
            {translateY: 65 * -Math.cos((index * Math.PI) / 2)},
          ]}
        />
      ))}
    </Group>
  );
}

function ClockFace() {
  return (
    <Group>
      <Circle c={{x: CENTER, y: CENTER}} r={120}>
        <LinearGradient
          start={{x: 70, y: 70}}
          end={{x: 270, y: 270}}
          colors={['#B2B2B2A8', '#2A2B2F3B', '#ffffffB2', '#2A2B2F80']}
          positions={[0, 0.14, 0.3, 0.53]}
        />
      </Circle>

      <Circle c={{x: CENTER, y: CENTER}} r={115} />

      <Circle
        c={{x: CENTER, y: CENTER}}
        r={111}
        color={'#2A2B2F'}
        strokeWidth={4}
        style={'stroke'}
      />
    </Group>
  );
}

function HourHand(props: {
  hours: SharedValue<number>;
  minute: SharedValue<number>;
}) {
  const {hours, minute} = props;
  const totalAngle = useDerivedValue(
    () => (hours.value + minute.value / 60) * 30,
  );

  const rotation = useDerivedValue(() => {
    return [{rotate: toRad(totalAngle.value)}];
  });

  return (
    <Line
      p1={vec(CENTER, CENTER + 15)}
      p2={vec(CENTER, CENTER - 60)}
      strokeWidth={10}
      strokeCap={'round'}
      transform={rotation}
      origin={vec(CENTER, CENTER)}
    />
  );
}

function MinHand(props: {minute: SharedValue<number>}) {
  const {minute} = props;
  const angle = useDerivedValue(() => {
    return minute.value * 6;
  });

  const rotation = useDerivedValue(() => {
    return [{rotate: toRad(angle.value)}];
  });

  return (
    <Line
      p1={vec(CENTER, CENTER + 15)}
      p2={vec(CENTER, CENTER - 80)}
      strokeWidth={4}
      strokeCap={'round'}
      transform={rotation}
      origin={vec(CENTER, CENTER)}
    />
  );
}

function Hands() {
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
    <Group color={'#CAAB41'}>
      <Group>
        {/* <Shadow dx={-1.75} dy={3.5} blur={5} inner color={'#AF9C6A'} />
        <Shadow dx={0} dy={3.5} blur={3.5} color={'#00000040'} /> */}

        <HourHand hours={hour} minute={minute} />

        <MinHand minute={minute} />
      </Group>

      <Circle c={{x: CENTER, y: CENTER}} r={10}>
        <Shadow dx={-1.75} dy={3.5} blur={5} color={'#DBDBDB7F'} inner />
        <Shadow dx={0} dy={3.5} blur={7} color={'#000'} />
      </Circle>
    </Group>
  );
}

export default function RealisticClock() {
  // return (
  //   <Canvas style={{flex: 1}}>
  //     <Group
  //       color="lightblue"
  //       layer={
  //         <Paint>
  //           <Blur blur={20} />
  //           <ColorMatrix
  //             matrix={[
  //               1, 0, 0, 0, 0,
  //               //@ts-ignore
  //               0, 1, 0, 0, 0,
  //               //@ts-ignore
  //               0, 0, 1, 0, 0,
  //               //@ts-ignore
  //               0, 0, 0, 18, -15,
  //             ]}
  //           />
  //         </Paint>
  //       }>
  //       <Circle cx={0} cy={128} r={128 * 0.95} />
  //       <Circle cx={270} cy={128} r={128 * 0.95} />
  //     </Group>
  //   </Canvas>
  // );
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Canvas style={{width: CANVAS_SIZE, height: CANVAS_SIZE}}>
        <FitBox
          src={rect(0, 0, 295, 295)}
          dst={rect(0, 0, CANVAS_SIZE, CANVAS_SIZE)}>
          <RectBackground />
          <ClockFace />
          <Group>
            <BottomLight />
            <Lines />
            {/* <TimerText /> */}
            <Hands />
          </Group>
        </FitBox>
      </Canvas>
    </View>
  );

  return null;
}
