import { useEffect, useState } from 'react';

import { getWindowSize, useEventListener } from '@utils';

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

  const isXXL = width > LARGE_SCREEN_BREAKPOINT;
  const isXS = width < XMOBILE_SCREEN_BREAKPOINT;
  const isSM = width >= XMOBILE_SCREEN_BREAKPOINT && width < MOBILE_SCREEN_BREAKPOINT;
  const isMD = width >= MOBILE_SCREEN_BREAKPOINT && width < SMALL_SCREEN_BREAKPOINT;
  const isLG = width >= SMALL_SCREEN_BREAKPOINT && width < MEDIUM_SCREEN_BREAKPOINT;
  const isXL = width >= MEDIUM_SCREEN_BREAKPOINT && width <= LARGE_SCREEN_BREAKPOINT;

  const isBiggerThanXL = width > LARGE_SCREEN_BREAKPOINT;
  const isBiggerThanLG = width > MEDIUM_SCREEN_BREAKPOINT;
  const isBiggerThanMD = width > SMALL_SCREEN_BREAKPOINT;
  const isBiggerThanSM = width > MOBILE_SCREEN_BREAKPOINT;
  const isBiggerThanXS = width > XMOBILE_SCREEN_BREAKPOINT;

  const isSmallerThanXL = width < LARGE_SCREEN_BREAKPOINT;
  const isSmallerThanLG = width < MEDIUM_SCREEN_BREAKPOINT;
  const isSmallerThanMD = width < SMALL_SCREEN_BREAKPOINT;
  const isSmallerThanSM = width < MOBILE_SCREEN_BREAKPOINT;
  const isSmallerThanXS = width < XMOBILE_SCREEN_BREAKPOINT;

  return {
    isXXL,
    isXS,
    isSM,
    isMD,
    isLG,
    isXL,
    isBiggerThanXL,
    isBiggerThanLG,
    isBiggerThanMD,
    isBiggerThanSM,
    isBiggerThanXS,
    isSmallerThanXL,
    isSmallerThanLG,
    isSmallerThanMD,
    isSmallerThanSM,
    isSmallerThanXS,
  };
};

export const useDeviceDetect = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize);
  const [deviceData, setDeviceData] = useState<IDeviceDetectData>(getDeviceData);

  useEffect(() => {
    setDeviceData(getDeviceData());
  }, [windowSize.width]);

  const handleResize = () => setWindowSize(getWindowSize());

  useEventListener('resize', handleResize);

  return { deviceData, windowSize };
};
