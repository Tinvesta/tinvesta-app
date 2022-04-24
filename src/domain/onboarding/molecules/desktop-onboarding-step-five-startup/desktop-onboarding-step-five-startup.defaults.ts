import { IDesktopOnboardingStepFiveStartupData } from '../../onboarding.types';

// eslint-disable-next-line max-len
export const defaultDesktopOnboardingStepFiveStartupFormData: IDesktopOnboardingStepFiveStartupData =
  {
    visionStatement: '',
    missionStatement: '',
  };

export const translationStrings = [
  'common.buttons.back',
  'common.buttons.continue',
  'common.form.field.error.required',
  'common.form.field.error.contain.enters.or.spaces',
  'common.form.field.error.starts.or.ends.with.whitespace',

  'component.desktop.onboarding.step.five.startup.subheading',
  'component.desktop.onboarding.step.five.startup.heading',
  'component.desktop.onboarding.step.five.startup.mission.statement.field.label',
  'component.desktop.onboarding.step.five.startup.mission.statement.field.placeholder',
  'component.desktop.onboarding.step.five.startup.mission.statement.field.max.length.error',
  'component.desktop.onboarding.step.five.startup.vision.statement.field.label',
  'component.desktop.onboarding.step.five.startup.vision.statement.field.placeholder',
  'component.desktop.onboarding.step.five.startup.vision.statement.field.max.length.error',
] as const;
