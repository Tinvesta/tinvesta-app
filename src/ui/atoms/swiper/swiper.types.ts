import { ReactNode } from 'react';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/types';

type TSwiperModulesTypes =
  | 'autoplay'
  | 'controller'
  | 'effectCoverflow'
  | 'effectCube'
  | 'effectFade'
  | 'effectFlip'
  | 'effectCreative'
  | 'effectCards'
  | 'hashNavigation'
  | 'history'
  | 'keyboard'
  | 'lazy'
  | 'mousewheel'
  | 'navigation'
  | 'pagination'
  | 'parallax'
  | 'scrollbar'
  | 'thumbs'
  | 'virtual'
  | 'zoom'
  | 'freeMode'
  | 'grid'
  | 'manipulation';

export type TSwiperModulesObject = {
  [key in TSwiperModulesTypes]: SwiperModule;
};

export interface ISwiperProps extends Omit<SwiperOptions, 'modules'> {
  children?: ReactNode;
  className?: string;
  modules?: TSwiperModulesTypes[];
}
