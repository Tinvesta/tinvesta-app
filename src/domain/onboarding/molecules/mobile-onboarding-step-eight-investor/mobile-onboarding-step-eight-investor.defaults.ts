import { IMobileOnboardingStepEightInvestorData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultMobileOnboardingStepEightInvestorFormData: IMobileOnboardingStepEightInvestorData =
  {
    teamSizeIds: [],
    investorDemandTypeIds: [],
  };

export const translationStrings = [
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.team.sizes.very.small',
  'common.team.sizes.small',
  'common.team.sizes.medium',
  'common.team.sizes.large',
  'common.investor.demand.types.talent',
  'common.investor.demand.types.location',
  'common.investor.demand.types.technology',
  'common.investor.demand.types.co.founder',
  'common.investor.demand.types.money.for.shares',
  'common.investor.demand.types.network.and.support',
  'common.investor.demand.types.debt.capital.without.shares',

  'component.mobile.onboarding.step.eight.investor.heading',
  'component.mobile.onboarding.step.eight.investor.team.size.field.label',
  'component.mobile.onboarding.step.eight.investor.demand.field.label',
] as const;
