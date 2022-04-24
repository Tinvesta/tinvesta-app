import { IDesktopOnboardingStepFiveInvestorData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultDesktopOnboardingStepFiveInvestorFormData: IDesktopOnboardingStepFiveInvestorData =
  {
    investorDemandTypeIds: [],
    whyStartupShouldMatchWithYou: '',
  };

export const translationStrings = [
  'common.buttons.back',
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',
  'common.investor.demand.types.talent',
  'common.investor.demand.types.location',
  'common.investor.demand.types.technology',
  'common.investor.demand.types.co.founder',
  'common.investor.demand.types.money.for.shares',
  'common.investor.demand.types.network.and.support',
  'common.investor.demand.types.debt.capital.without.shares',

  'component.desktop.onboarding.step.five.investor.heading',
  'component.desktop.onboarding.step.five.investor.subheading',
  'component.desktop.onboarding.step.five.investor.demand.field.label',
  'component.desktop.onboarding.step.five.investor.why.startup.should.match.with.you.field.label',
  'component.desktop.onboarding.step.five.investor.why.startup.should.match.with.you.field.max.length.error',
] as const;
