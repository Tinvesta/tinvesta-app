import { useEffect, useState } from 'react';

import { getWindowSize } from '@utils';

import {
  LARGE_SCREEN_BREAKPOINT,
  MEDIUM_SCREEN_BREAKPOINT,
  MOBILE_SCREEN_BREAKPOINT,
  SMALL_SCREEN_BREAKPOINT,
  XMOBILE_SCREEN_BREAKPOINT,
} from '@constants';

import { IDeviceDetectData } from './use-device-detect.types';

const getDeviceData = () => {
  const { width } = getWindowSize();

  const xxl = width > LARGE_SCREEN_BREAKPOINT;
  const xs = width < XMOBILE_SCREEN_BREAKPOINT;
  const sm = width >= XMOBILE_SCREEN_BREAKPOINT && width < MOBILE_SCREEN_BREAKPOINT;
  const md = width >= MOBILE_SCREEN_BREAKPOINT && width < SMALL_SCREEN_BREAKPOINT;
  const lg = width >= SMALL_SCREEN_BREAKPOINT && width < MEDIUM_SCREEN_BREAKPOINT;
  const xl = width >= MEDIUM_SCREEN_BREAKPOINT && width <= LARGE_SCREEN_BREAKPOINT;

  return { xs, sm, md, lg, xl, xxl };
};

export const useDeviceDetect = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize);
  const [deviceData, setDeviceData] = useState<IDeviceDetectData>(getDeviceData);

  useEffect(() => {
    setDeviceData(getDeviceData());
  }, [windowSize.width]);

  useEffect(() => {
    const handleResize = () => setWindowSize(getWindowSize());

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return { deviceData, windowSize };
};
