import {
  IMobileOnboardingStepEightStartupData,
  IMobileOnboardingStepFiveStartupData,
  IMobileOnboardingStepFourData,
  IMobileOnboardingStepNineStartupData,
  IMobileOnboardingStepOneData,
  IMobileOnboardingStepSevenStartupData,
  IMobileOnboardingStepSixStartupData,
  IMobileOnboardingStepThreeData,
  IMobileOnboardingStepTwoData,
} from '../../../../onboarding.types';

export interface IMobileOnboardingMachineContext {
  stepEightStartupData: IMobileOnboardingStepEightStartupData;
  stepFiveStartupData: IMobileOnboardingStepFiveStartupData;
  stepFourData: IMobileOnboardingStepFourData;
  stepNineStartupData: IMobileOnboardingStepNineStartupData;
  stepOneData: IMobileOnboardingStepOneData;
  stepSevenStartupData: IMobileOnboardingStepSevenStartupData;
  stepSixStartupData: IMobileOnboardingStepSixStartupData;
  stepThreeData: IMobileOnboardingStepThreeData;
  stepTwoData: IMobileOnboardingStepTwoData;
}

export enum EMobileOnboardingMachineStates {
  STEP_EIGHT_STARTUP = 'step-eight-startup',
  STEP_FIVE_HUB = 'step-five-hub',
  STEP_FIVE_STARTUP = 'step-five-startup',
  STEP_FOUR = 'step-four',
  STEP_NINE_STARTUP = 'step-nine-startup',
  STEP_ONE = 'step-one',
  STEP_SEVEN_STARTUP = 'step-seven-startup',
  STEP_SIX_STARTUP = 'step-six-startup',
  STEP_THREE = 'step-three',
  STEP_TWO = 'step-two',
}

export enum EMobileOnboardingMachineEvents {
  BACK = 'BACK',
  NEXT = 'NEXT',
}

export enum EMobileOnboardingMachineAdditionalEvents {
  SET_PROFILE_DATA_FROM_SUPABASE = 'SET_PROFILE_DATA_FROM_SUPABASE',
}
