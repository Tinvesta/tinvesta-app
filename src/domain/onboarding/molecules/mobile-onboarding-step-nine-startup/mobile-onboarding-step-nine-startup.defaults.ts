import { IMobileOnboardingStepNineStartupData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultMobileOnboardingStepNineStartupFormData: IMobileOnboardingStepNineStartupData =
  {
    missionStatement: '',
    visionStatement: '',
  };

export const translationStrings = [
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',

  'component.mobile.onboarding.step.nine.startup.heading',
  'component.mobile.onboarding.step.nine.startup.mission.statement.field.label',
  'component.mobile.onboarding.step.nine.startup.mission.statement.field.placeholder',
  'component.mobile.onboarding.step.nine.startup.mission.statement.field.max.length.error',
  'component.mobile.onboarding.step.nine.startup.vision.statement.field.label',
  'component.mobile.onboarding.step.nine.startup.vision.statement.field.placeholder',
  'component.mobile.onboarding.step.nine.startup.vision.statement.field.max.length.error',
] as const;
