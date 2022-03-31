import { ModalProps, Modal as MuiModal } from '@mui/material';
import { useCallback, useState } from 'react';

import S from './use-modal.styles';

export const useModal = (defaultIsOpenState: boolean = false) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpenState);
  const show = () => setIsOpen(true);
  const hide = () => setIsOpen(false);

  const Modal = ({ children, onClose, ...restProps }: Omit<ModalProps, 'open'>): JSX.Element => {
    const handleClose = (event: {}, reason: 'backdropClick' | 'escapeKeyDown') => {
      hide();

      if (onClose) {
        onClose(event, reason);
      }
    };

    return (
      <MuiModal open={isOpen} onClose={handleClose} {...restProps}>
        <S.StyledContentWrapper>
          <>
            <S.StyledCloseIcon onClick={hide} />
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
