import { Divider, Typography } from '@mui/material';

import { useDeviceDetect } from '@utils';

import S from './section-wrapper.styles';
import { ISectionWrapperProps } from './section-wrapper.types';

export const SectionWrapperLayout = ({ children, title }: ISectionWrapperProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  return (
    <S.StyledWrapper>
      <Divider>
        <Typography fontWeight={700} variant={deviceData.isSmallerThanXS ? 'h5' : 'h4'}>
          {title}
        </Typography>
      </Divider>
      <S.StyledContentWrapper>{children}</S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
