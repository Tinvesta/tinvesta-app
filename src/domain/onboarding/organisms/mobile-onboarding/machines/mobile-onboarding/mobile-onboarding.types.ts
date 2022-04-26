import {
  IMobileOnboardingStepFiveStartupData,
  IMobileOnboardingStepFourData,
  IMobileOnboardingStepOneData,
  IMobileOnboardingStepThreeData,
  IMobileOnboardingStepTwoData,
} from '../../../../onboarding.types';

export interface IMobileOnboardingMachineContext {
  stepFiveStartupData: IMobileOnboardingStepFiveStartupData;
  stepFourData: IMobileOnboardingStepFourData;
  stepOneData: IMobileOnboardingStepOneData;
  stepThreeData: IMobileOnboardingStepThreeData;
  stepTwoData: IMobileOnboardingStepTwoData;
}

export enum EMobileOnboardingMachineStates {
  STEP_FIVE_HUB = 'step-five-hub',
  STEP_FIVE_STARTUP = 'step-five-startup',
  STEP_FOUR = 'step-four',
  STEP_ONE = 'step-one',
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
