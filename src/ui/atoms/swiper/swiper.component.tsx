import { memo } from 'react';
import {
  Autoplay,
  Controller,
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  FreeMode,
  Grid,
  HashNavigation,
  History,
  Keyboard,
  Lazy,
  Manipulation,
  Mousewheel,
  Navigation,
  Pagination,
  Parallax,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
} from 'swiper';
import 'swiper/css/bundle';
import { Swiper as ReactSwiper } from 'swiper/react';

import { ISwiperProps, TSwiperModulesObject } from './swiper.types';

const swiperModulesMapper: TSwiperModulesObject = {
  lazy: Lazy,
  zoom: Zoom,
  grid: Grid,
  thumbs: Thumbs,
  history: History,
  virtual: Virtual,
  autoplay: Autoplay,
  keyboard: Keyboard,
  parallax: Parallax,
  freeMode: FreeMode,
  scrollbar: Scrollbar,
  controller: Controller,
  effectCube: EffectCube,
  effectFade: EffectFade,
  effectFlip: EffectFlip,
  mousewheel: Mousewheel,
  navigation: Navigation,
  pagination: Pagination,
  effectCards: EffectCards,
  manipulation: Manipulation,
  effectCreative: EffectCreative,
  hashNavigation: HashNavigation,
  effectCoverflow: EffectCoverflow,
};

const SwiperComponent = ({ children, modules = [], ...restProps }: ISwiperProps) => (
  <ReactSwiper {...restProps} modules={modules.map((_module) => swiperModulesMapper[_module])}>
    {children}
  </ReactSwiper>
);

export const Swiper = memo(SwiperComponent);
