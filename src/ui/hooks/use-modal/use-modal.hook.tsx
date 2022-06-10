import { Modal as MuiModal } from '@mui/material';
import { useCallback, useState } from 'react';

import { useDeviceDetect } from '@utils';

import S from './use-modal.styles';
import { IModalProps, IUseModalProps } from './use-modal.types';

export const useModal = ({
  align = 'center',
  alwaysFullWidth = false,
  backgroundStyles,
  defaultIsOpenState = false,
  withBorderRadius = true,
  withCloseIcon = true,
  withPadding = true,
}: IUseModalProps = {}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpenState);

  const { deviceData } = useDeviceDetect();

  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  const Modal = ({ children, onClose, title, ...restProps }: IModalProps): JSX.Element => {
    const handleClose = (
      event: {},
      reason: 'backdropClick' | 'escapeKeyDown' | 'closeIconClick',
    ) => {
      hide();

      if (onClose) {
        onClose(event, reason);
      }
    };

    const onCloseIconClick = () => handleClose({}, 'closeIconClick');

    const finalOpenState = restProps.open === undefined ? isOpen : restProps.open;

    return (
      <MuiModal
        disableAutoFocus
        disableEnforceFocus
        BackdropProps={{
          transitionDuration: 0,
        }}
        onClose={handleClose}
        {...restProps}
        open={finalOpenState}
      >
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

  const memoizedModal = useCallback(Modal, [Modal]);

  return {
    show,
    hide,
    isOpen,
    Modal: memoizedModal,
  };
};
