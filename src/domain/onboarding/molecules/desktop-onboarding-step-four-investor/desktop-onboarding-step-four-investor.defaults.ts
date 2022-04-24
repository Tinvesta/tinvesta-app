import { IDesktopOnboardingStepFourInvestorData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultDesktopOnboardingStepFourInvestorFormData: IDesktopOnboardingStepFourInvestorData =
  {
    teamSizeIds: [],
    investmentSizeIds: [],
    investmentStageTypeIds: [],
  };

export const translationStrings = [
  'common.buttons.back',
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.team.sizes.very.small',
  'common.team.sizes.small',
  'common.team.sizes.medium',
  'common.team.sizes.large',
  'common.investment.stage.types.idea',
  'common.investment.stage.types.seed',
  'common.investment.stage.types.growth',
  'common.investment.stage.types.series.a',
  'common.investment.stage.types.series.b',
  'common.investment.sizes.very.small',
  'common.investment.sizes.small',
  'common.investment.sizes.medium',
  'common.investment.sizes.large',
  'common.investment.sizes.very.large',

  'component.desktop.onboarding.step.four.investor.heading',
  'component.desktop.onboarding.step.four.investor.subheading',
  'component.desktop.onboarding.step.four.investor.team.size.field.label',
  'component.desktop.onboarding.step.four.investor.investment.size.field.label',
  'component.desktop.onboarding.step.four.investor.investment.stage.field.label',
] as const;
