import { LoadingButton } from '@mui/lab';
import { Button, Grid, Typography } from '@mui/material';
import { memo } from 'react';
import { useDeviceDetect } from 'use-device-detect';

import { CenterBlockLayout, TextFieldWithController } from '@ui';

import { containEntersOrSpaces, startsOrEndsWithWhitespace, useTranslation } from '@utils';

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

  const buttonSize = deviceData.isSmallerThanXS ? 'medium' : 'large';

  return (
    <CenterBlockLayout>
      <S.StyledWrapper {...formProps}>
        <Grid container columnSpacing={4} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography align="center" variant={deviceData.isSmallerThanXS ? 'body2' : 'body1'}>
              {translations.componentDashboardFeedbackFormDescription}
            </Typography>
          </Grid>
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
                color: 'secondary',
                autoComplete: 'disabled',
                label: translations.componentDashboardFeedbackFormMessageFieldLabel,
              }}
            />
          </Grid>
          <Grid item display="flex" gap={deviceData.isSmallerThanXS ? 4 : 5} xs={12}>
            <Grid item xs={6}>
              <Button
                fullWidth
                color="secondary"
                disabled={!isDirty}
                size={buttonSize}
                variant="outlined"
                onClick={onResetButtonClick}
              >
                {translations.commonButtonsReset}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <LoadingButton
                fullWidth
                color="info"
                disabled={!isDirty}
                loading={isLoading}
                size={buttonSize}
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
