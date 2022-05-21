import { ArrowForward as ArrowForwardIcon, Star as StarIcon } from '@mui/icons-material';
import { ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import { StringParam, useQueryParam } from 'use-query-params';

import { CenterBlockLayout } from '@ui';

import { isSomeEnum, useDeviceDetect, useDidMountEffect, useTranslation, useUser } from '@utils';

import { EPaymentStatus, ESubscriptionInterval } from '@enums';

import { stripePortalAction, subscriptionAction } from '../../api';
import { SectionWrapperLayout } from '../../atoms';
import { getSubscriptionBenefits, translationStrings } from './subscription-plans.defaults';
import S from './subscription-plans.styles';
import { ISubscriptionPlansProps } from './subscription-plans.types';

export const SubscriptionPlans = ({ plans }: ISubscriptionPlansProps): JSX.Element => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);
  const [paymentStatusQueryParam, setPaymentStatusQueryParam] = useQueryParam(
    'paymentStatus',
    StringParam,
  );

  const { isLoading: isSubscriptionActionLoading, mutateAsync: mutateAsyncSubscriptionAction } =
    useMutation(subscriptionAction, {
      onError: () => {
        toast.error(translations.commonErrorsSomethingWentWrong);
      },
    });

  const { isLoading: isStripePortalActionLoading, mutateAsync: mutateAsyncStripePortalAction } =
    useMutation(stripePortalAction, {
      onError: () => {
        toast.error(translations.commonErrorsSomethingWentWrong);
      },
    });

  useDidMountEffect(() => {
    if (!isSomeEnum(EPaymentStatus)(paymentStatusQueryParam)) {
      return;
    }

    if (paymentStatusQueryParam === EPaymentStatus.SUCCESS) {
      setPaymentStatusQueryParam('');
      toast.success(translations.componentDashboardSubscriptionPaymentSuccess);
    }
  }, [paymentStatusQueryParam]);

  const processSubscription = (planId: string) => async () => {
    const { data } = await mutateAsyncSubscriptionAction(planId);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

    await stripe?.redirectToCheckout({ sessionId: data.id });
  };

  const loadStripePortal = () =>
    mutateAsyncStripePortalAction().then(({ data }) => {
      router.push(data.url);
    });

  const showSubscribeButton = !!user && !user.is_subscribed;
  const showManageSubscriptionButton = !!user && user.is_subscribed;
  const subscriptionBenefits = getSubscriptionBenefits(translations);

  return (
    <SectionWrapperLayout title={translations.componentDashboardSubscriptionHeader}>
      <CenterBlockLayout>
        <S.StyledHeader variant={deviceData.isSmallerThanXS ? 'body1' : 'h5'}>
          {translations.componentDashboardSubscriptionBenefits}
        </S.StyledHeader>
        <S.StyledList dense={deviceData.isSmallerThanXS}>
          {subscriptionBenefits.map((_subscriptionBenefit) => (
            <ListItem key={_subscriptionBenefit}>
              <ListItemAvatar>
                <StarIcon />
              </ListItemAvatar>
              <ListItemText>{_subscriptionBenefit}</ListItemText>
            </ListItem>
          ))}
        </S.StyledList>
        <S.StyledPapersWrapper>
          {plans.map((_plan) => {
            const isMonth = _plan.interval === ESubscriptionInterval.MONTH;

            return (
              <S.StyledPaper key={_plan.id}>
                <span>
                  <Typography align="center" color="secondary" variant="body1">
                    {
                      translations[
                        `componentDashboardSubscription${isMonth ? 'Month' : 'Year'}lyHeader`
                      ]
                    }
                  </Typography>
                  <Typography align="center" color="secondary" variant="h4">
                    {_plan.price / 100} {translations.componentDashboardSubscriptionCurrency}
                  </Typography>
                  {!isMonth && (
                    <Typography align="center" color="secondary" display="block" variant="caption">
                      ({translations.componentDashboardSubscriptionYearlySubheader})
                    </Typography>
                  )}
                </span>
                {showSubscribeButton && (
                  <S.StyledSubscriptionPaperButton
                    color="secondary"
                    endIcon={<ArrowForwardIcon />}
                    loading={isLoading || isSubscriptionActionLoading}
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
                    color="secondary"
                    endIcon={<ArrowForwardIcon />}
                    loading={isLoading || isStripePortalActionLoading}
                    variant="outlined"
                    onClick={loadStripePortal}
                  >
                    {translations.componentDashboardSubscriptionManageButton}
                  </S.StyledSubscriptionPaperButton>
                )}
              </S.StyledPaper>
            );
          })}
        </S.StyledPapersWrapper>
      </CenterBlockLayout>
    </SectionWrapperLayout>
  );
};
