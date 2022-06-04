import { memo } from 'react';
import { Keyboard, Navigation, Pagination, Scrollbar } from 'swiper';
import 'swiper/css/bundle';
import { Swiper as ReactSwiper } from 'swiper/react';

import { ISwiperProps, TSwiperModulesObject } from './swiper.types';

const swiperModulesMapper: TSwiperModulesObject = {
  keyboard: Keyboard,
  scrollbar: Scrollbar,
  pagination: Pagination,
  navigation: Navigation,
};

const SwiperComponent = ({ children, modules = [], ...restProps }: ISwiperProps) => (
  <ReactSwiper {...restProps} modules={modules.map((_module) => swiperModulesMapper[_module])}>
    {children}
  </ReactSwiper>
);

export const Swiper = memo(SwiperComponent);
