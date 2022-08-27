import { ReactNode } from 'react';
import { SwiperOptions } from 'swiper';
import { SwiperModule } from 'swiper/types';

type TSwiperModulesTypes = 'keyboard' | 'scrollbar' | 'navigation';

export type TSwiperModulesObject = {
  [key in TSwiperModulesTypes]: SwiperModule;
};

export interface ISwiperProps extends Omit<SwiperOptions, 'modules'> {
  children?: ReactNode;
  className?: string;
  modules?: TSwiperModulesTypes[];
}
