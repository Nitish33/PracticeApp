import {View, Text} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

export default function useTimer() {
  const [time, updateTime] = useState(0);
  const timer = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      updateTime(time => time + 0.1);
    }, 100);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return time;
}
