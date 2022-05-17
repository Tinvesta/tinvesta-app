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
import { RatingWithController } from './molecules';

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
        <Grid container columnSpacing={4} rowSpacing={4}>
          <Grid item alignItems="center" display="flex" justifyContent="center" xs={12}>
            <RatingWithController
              controllerProps={{
                control,
                name: 'rating',
              }}
              ratingProps={{
                max: 10,
                size: deviceData.isSmallerThanXS ? 'medium' : 'large',
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
                rows: 4,
                fullWidth: true,
                multiline: true,
                autoComplete: 'disabled',
                label: translations.componentDashboardFeedbackFormMessageFieldLabel,
              }}
            />
          </Grid>
          <Grid item display="flex" gap={4} justifyContent="flex-end" xs={12}>
            <Grid item xs={6}>
              <Button
                fullWidth
                color="secondary"
                disabled={!isDirty}
                size="large"
                variant="outlined"
                onClick={onResetButtonClick}
              >
                {translations.commonButtonsReset}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <LoadingButton
                fullWidth
                color="secondary"
                disabled={!isDirty}
                loading={isLoading}
                size="large"
                type="submit"
                variant="contained"
              >
                {translations.commonButtonsSend}
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </S.StyledWrapper>
    </CenterBlockLayout>
  );
};

export const FeedbackForm = memo(FeedbackFormComponent);
