import { Modal as MuiModal } from '@mui/material';
import { useDeviceDetect } from 'use-device-detect';

import S from './modal.styles';
import { IModalProps } from './modal.types';

export const Modal = ({
  align = 'center',
  alwaysFullWidth = false,
  backgroundStyles,
  children,
  onClose,
  title,
  withBorderRadius = true,
  withCloseIcon = true,
  withPadding = true,
  ...restProps
}: IModalProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const handleClose = (event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'closeIconClick') =>
    onClose && onClose(event, reason);

  const onCloseIconClick = () => handleClose({}, 'closeIconClick');

  return (
    <MuiModal disableAutoFocus disableEnforceFocus onClose={handleClose} {...restProps}>
      <S.StyledContentWrapper
        align={align}
        alwaysFullWidth={alwaysFullWidth}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        style={backgroundStyles}
        withBorderRadius={withBorderRadius}
        withPadding={withPadding}
      >
        {(title || withCloseIcon) && (
          <S.StyledHeader>
            {title && (
              <S.StyledTitle
                align="center"
                color="secondary"
                fontWeight={700}
                variant={deviceData.isSmallerThanXS ? 'h6' : 'h5'}
              >
                {title}
              </S.StyledTitle>
            )}
            {withCloseIcon && <S.StyledCloseIcon fontSize="large" onClick={onCloseIconClick} />}
          </S.StyledHeader>
        )}
        {children}
      </S.StyledContentWrapper>
    </MuiModal>
  );
};
