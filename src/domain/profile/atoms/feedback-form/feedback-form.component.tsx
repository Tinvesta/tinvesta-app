import { LoadingButton } from '@mui/lab';
import { Button, Grid } from '@mui/material';
import { memo } from 'react';

import { CenterBlockLayout, TextFieldWithController } from '@ui';

import {
  containEntersOrSpaces,
  startsOrEndsWithWhitespace,
  useDeviceDetect,
  useTranslation,
} from '@utils';

import { translationStrings } from './feedback-form.defaults';
import S from './feedback-form.styles';
import { IFeedbackFormProps } from './feedback-form.types';

const FeedbackFormComponent = ({
  control,
  isDirty,
  isLoading,
  onResetButtonClick,
  ...formProps
}: IFeedbackFormProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const translations = useTranslation(translationStrings);

  return (
    <CenterBlockLayout>
      <S.StyledWrapper {...formProps}>
        <Grid container columnSpacing={4} rowSpacing={deviceData.isSmallerThanMD ? 1 : 3}>
          <Grid item xs={12}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'rating',
                rules: {
                  required: {
                    value: true,
                    message: translations.commonFormFieldErrorRequired,
                  },
                },
              }}
              inputProps={{
                fullWidth: true,
                autoComplete: 'disabled',
                label: translations.componentDashboardFeedbackFormRatingFieldLabel,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextFieldWithController
              controllerProps={{
                control,
                name: 'message',
                rules: {
                  required: {
                    value: true,
                    message: translations.commonFormFieldErrorRequired,
                  },
                  maxLength: {
                    value: 160,
                    message: translations.componentDashboardFeedbackFormMessageFieldMaxLengthError,
                  },
                  validate: {
                    startsOrEndsWithWhitespace: startsOrEndsWithWhitespace(
                      translations.commonFormFieldErrorStartsOrEndsWithWhitespace,
                    ),
                    containEntersOrSpaces: containEntersOrSpaces(
                      translations.commonFormFieldErrorContainEntersOrSpaces,
                    ),
                  },
                },
              }}
              inputProps={{
                fullWidth: true,
                multiline: true,
                autoComplete: 'disabled',
                rows: deviceData.isSmallerThanSM ? 4 : 3,
                label: translations.componentDashboardFeedbackFormMessageFieldLabel,
              }}
            />
          </Grid>
          <Grid item display="flex" gap={4} justifyContent="flex-end" xs={12}>
            <Grid item xs={deviceData.isSmallerThanSM ? 6 : 3}>
              <Button
                fullWidth
                disabled={!isDirty}
                size="large"
                variant="outlined"
                onClick={onResetButtonClick}
              >
                {translations.commonButtonsReset}
              </Button>
            </Grid>
            <Grid item xs={deviceData.isSmallerThanSM ? 6 : 3}>
              <LoadingButton
                fullWidth
                disabled={!isDirty}
                loading={isLoading}
                size="large"
                type="submit"
                variant="contained"
              >
                {translations.commonButtonsSave}
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </S.StyledWrapper>
    </CenterBlockLayout>
  );
};

export const FeedbackForm = memo(FeedbackFormComponent);
