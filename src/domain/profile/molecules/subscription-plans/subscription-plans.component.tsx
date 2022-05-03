import { ArrowForward as ArrowForwardIcon, Star as StarIcon } from '@mui/icons-material';
import { ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { toast } from 'react-toastify';
import { StringParam, useQueryParam } from 'use-query-params';

import { CenterBlockLayout } from '@ui';

import { isSomeEnum, useDeviceDetect, useDidMountEffect, useTranslation, useUser } from '@utils';

import { EPaymentStatus, ESubscriptionInterval } from '@enums';

import { SectionWrapperLayout } from '../../atoms';
import { translationStrings } from './subscription-plans.defaults';
import S from './subscription-plans.styles';
import { ISubscriptionPlansProps } from './subscription-plans.types';

// TODO - move to react-query and handle loading and errors
const processSubscription = (planId: string) => async () => {
  const { data } = await axios.get(`/api/subscription/${planId}`);

  const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

  await stripe?.redirectToCheckout({ sessionId: data.id });
};

export const SubscriptionPlans = ({ plans }: ISubscriptionPlansProps): JSX.Element => {
  const { isLoading, user } = useUser();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);
  const [paymentStatusQueryParam] = useQueryParam('paymentStatus', StringParam);

  useDidMountEffect(() => {
    if (!isSomeEnum(EPaymentStatus)(paymentStatusQueryParam)) {
      return;
    }

    if (paymentStatusQueryParam === EPaymentStatus.SUCCESS) {
      toast.success(translations.componentDashboardSubscriptionPaymentSuccess);
    }
  }, [paymentStatusQueryParam]);

  const showSubscribeButton = !!user && !user.is_subscribed;
  const showManageSubscriptionButton = !!user && user.is_subscribed;

  return (
    <SectionWrapperLayout title={translations.componentDashboardSubscriptionHeader}>
      <CenterBlockLayout>
        <S.StyledHeader variant={deviceData.isSmallerThanXS ? 'h6' : 'h5'}>
          {translations.componentDashboardSubscriptionBenefits}
        </S.StyledHeader>
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
        <S.StyledPapersWrapper>
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
                {!isLoading && (
                  <>
                    {showSubscribeButton && (
                      <S.StyledSubscriptionPaperButton
                        endIcon={<ArrowForwardIcon />}
                        variant="outlined"
                        onClick={processSubscription(_plan.id)}
                      >
                        {
                          translations[
                            `componentDashboardSubscription${isMonth ? 'Month' : 'Year'}lyButton`
                          ]
                        }
                      </S.StyledSubscriptionPaperButton>
                    )}
                    {showManageSubscriptionButton && (
                      <S.StyledSubscriptionPaperButton
                        endIcon={<ArrowForwardIcon />}
                        variant="outlined"
                      >
                        {
                          translations[
                            `componentDashboardSubscription${
                              isMonth ? 'Month' : 'Year'
                            }lyManageButton`
                          ]
                        }
                      </S.StyledSubscriptionPaperButton>
                    )}
                  </>
                )}
              </S.StyledPaper>
            );
          })}
        </S.StyledPapersWrapper>
      </CenterBlockLayout>
    </SectionWrapperLayout>
  );
};
