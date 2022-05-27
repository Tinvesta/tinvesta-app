import { Button, Typography } from '@mui/material';

import { useModal } from '@ui';

import { useDeviceDetect } from '@utils';

import S from './confirmation-modal.styles';
import { IConfirmationModalProps } from './confirmation-modal.types';

export const ConfirmationModal = ({
  onCancel,
  onConfirm,
  open,
  onClose,
  options: {
    cancellationButtonProps,
    cancellationText,
    confirmationButtonProps,
    confirmationText,
    content,
    contentProps,
    description,
    modalProps,
    title,
  } = {},
}: IConfirmationModalProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const { Modal } = useModal({ withBorderRadius: deviceData.isBiggerThanXS });

  return (
    <Modal {...modalProps} open={open} title={title} onClose={onClose}>
      <S.StyledWrapper>
        {content ? (
          <S.StyledDialogContent {...contentProps}>{content}</S.StyledDialogContent>
        ) : (
          description && (
            <S.StyledDialogContent {...contentProps}>
              <Typography
                align="center"
                color="secondary"
                variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}
              >
                {description}
              </Typography>
            </S.StyledDialogContent>
          )
        )}
        {(cancellationText || confirmationText) && (
          <S.StyledDialogActions>
            {cancellationText && (
              <Button
                fullWidth
                {...cancellationButtonProps}
                color="secondary"
                size={deviceData.isSmallerThanXS ? 'small' : 'medium'}
                variant="outlined"
                onClick={onCancel}
              >
                {cancellationText}
              </Button>
            )}
            {confirmationText && (
              <Button
                fullWidth
                color="secondary"
                size={deviceData.isSmallerThanXS ? 'small' : 'medium'}
                variant="contained"
                {...confirmationButtonProps}
                onClick={onConfirm}
              >
                {confirmationText}
              </Button>
            )}
          </S.StyledDialogActions>
        )}
      </S.StyledWrapper>
    </Modal>
  );
};
