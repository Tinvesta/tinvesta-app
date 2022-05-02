import { ArrowForward as ArrowForwardIcon, Star as StarIcon } from '@mui/icons-material';
import { ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import { CenterBlockLayout } from '@ui';

import { useDeviceDetect, useTranslation } from '@utils';

import { ESubscriptionInterval } from '@enums';

import { SectionWrapperLayout } from '../../atoms';
import { translationStrings } from './subscription-plans.defaults';
import S from './subscription-plans.styles';
import { ISubscriptionPlansProps } from './subscription-plans.types';

export const SubscriptionPlans = ({ plans }: ISubscriptionPlansProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  return (
    <SectionWrapperLayout title={translations.componentDashboardSubscriptionHeader}>
      <CenterBlockLayout>
        <Typography align="center" variant={deviceData.isSmallerThanXS ? 'h6' : 'h5'}>
          {translations.componentDashboardSubscriptionBenefits}
        </Typography>
        <S.StyledList dense={deviceData.isSmallerThanXS}>
          <ListItem>
            <ListItemAvatar>
              <StarIcon />
            </ListItemAvatar>
            <ListItemText>{translations.componentDashboardSubscriptionBenefitOne}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <StarIcon />
            </ListItemAvatar>
            <ListItemText>{translations.componentDashboardSubscriptionBenefitTwo}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <StarIcon />
            </ListItemAvatar>
            <ListItemText>{translations.componentDashboardSubscriptionBenefitThree}</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <StarIcon />
            </ListItemAvatar>
            <ListItemText>{translations.componentDashboardSubscriptionBenefitFour}</ListItemText>
          </ListItem>
        </S.StyledList>
        <S.StyledWrapper>
          {plans.map((_plan) => {
            const isMonth = _plan.interval === ESubscriptionInterval.MONTH;

            return (
              <S.StyledPaper key={_plan.id}>
                <span>
                  <Typography align="center" variant="body1">
                    {
                      translations[
                        `componentDashboardSubscription${isMonth ? 'Month' : 'Year'}lyHeader`
                      ]
                    }
                  </Typography>
                  <Typography align="center" variant="h4">
                    {_plan.price / 100} {translations.componentDashboardSubscriptionCurrency}
                  </Typography>
                  {!isMonth && (
                    <Typography align="center" display="block" variant="caption">
                      ({translations.componentDashboardSubscriptionYearlySubheader})
                    </Typography>
                  )}
                </span>
                <S.StyledSubscriptionPaperButton endIcon={<ArrowForwardIcon />} variant="outlined">
                  {
                    translations[
                      `componentDashboardSubscription${isMonth ? 'Month' : 'Year'}lyButton`
                    ]
                  }
                </S.StyledSubscriptionPaperButton>
              </S.StyledPaper>
            );
          })}
        </S.StyledWrapper>
      </CenterBlockLayout>
    </SectionWrapperLayout>
  );
};
