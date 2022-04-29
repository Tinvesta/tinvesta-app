import { Modal as MuiModal } from '@mui/material';
import { useCallback, useState } from 'react';

import S from './use-modal.styles';
import { IModalProps, IUseModalAttributes } from './use-modal.types';

export const useModal = ({
  defaultIsOpenState = false,
  withCloseIcon = true,
}: IUseModalAttributes = {}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpenState);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  const Modal = ({ children, onClose, ...restProps }: IModalProps): JSX.Element => {
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
      <MuiModal onClose={handleClose} {...restProps} open={finalOpenState}>
        <S.StyledContentWrapper>
          <>
            {withCloseIcon && <S.StyledCloseIcon onClick={onCloseIconClick} />}
            {children}
          </>
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
