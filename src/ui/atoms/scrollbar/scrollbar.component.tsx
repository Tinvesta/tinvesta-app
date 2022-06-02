import { ForwardedRef, forwardRef, memo } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import S from './scrollbar.styles';
import { IScrollbarProps } from './scrollbar.types';

const ScrollbarComponent = (
  { height = '300px', width = '100%', ...restProps }: IScrollbarProps,
  ref: ForwardedRef<Scrollbars>,
): JSX.Element => (
  <Scrollbars
    ref={ref}
    autoHide
    universal
    autoHideDuration={200}
    autoHideTimeout={1000}
    renderThumbHorizontal={(props: object) => <S.StyledThumbHorizontal {...props} />}
    renderThumbVertical={(props: object) => <S.StyledThumbVertical {...props} />}
    renderTrackHorizontal={(props: object) => <S.StyledTrackHorizontal {...props} />}
    renderTrackVertical={(props: object) => <S.StyledTrackVertical {...props} />}
    renderView={(props: object) => <S.StyledView {...props} />}
    style={{ width, height }}
    {...restProps}
  />
);

export const Scrollbar = memo(forwardRef(ScrollbarComponent));
