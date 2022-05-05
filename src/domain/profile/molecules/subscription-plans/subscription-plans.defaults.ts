export const translationStrings = [
  'component.dashboard.subscription.currency',
  'component.dashboard.subscription.header',
  'component.dashboard.subscription.benefits',
  'component.dashboard.subscription.benefit.one',
  'component.dashboard.subscription.benefit.two',
  'component.dashboard.subscription.benefit.three',
  'component.dashboard.subscription.monthly.header',
  'component.dashboard.subscription.monthly.button',
  'component.dashboard.subscription.yearly.header',
  'component.dashboard.subscription.yearly.subheader',
  'component.dashboard.subscription.yearly.button',
  'component.dashboard.subscription.manage.button',
  'component.dashboard.subscription.payment.success',
  'common.errors.something.went.wrong',
] as const;

export const getSubscriptionBenefits = (translations: Record<string, string>) => [
  translations.componentDashboardSubscriptionBenefitOne,
  translations.componentDashboardSubscriptionBenefitTwo,
  translations.componentDashboardSubscriptionBenefitThree,
];
