import {
  IMobileOnboardingStepEightInvestorData,
  IMobileOnboardingStepEightStartupData,
  IMobileOnboardingStepFiveInvestorData,
  IMobileOnboardingStepFiveStartupData,
  IMobileOnboardingStepFourData,
  IMobileOnboardingStepNineInvestorData,
  IMobileOnboardingStepNineStartupData,
  IMobileOnboardingStepOneData,
  IMobileOnboardingStepSevenInvestorData,
  IMobileOnboardingStepSevenStartupData,
  IMobileOnboardingStepSixInvestorData,
  IMobileOnboardingStepSixStartupData,
  IMobileOnboardingStepThreeData,
  IMobileOnboardingStepTwoData,
} from '../../../../onboarding.types';

export interface IMobileOnboardingMachineContext {
  stepEightInvestorData: IMobileOnboardingStepEightInvestorData;
  stepEightStartupData: IMobileOnboardingStepEightStartupData;
  stepFiveInvestorData: IMobileOnboardingStepFiveInvestorData;
  stepFiveStartupData: IMobileOnboardingStepFiveStartupData;
  stepFourData: IMobileOnboardingStepFourData;
  stepNineInvestorData: IMobileOnboardingStepNineInvestorData;
  stepNineStartupData: IMobileOnboardingStepNineStartupData;
  stepOneData: IMobileOnboardingStepOneData;
  stepSevenInvestorData: IMobileOnboardingStepSevenInvestorData;
  stepSevenStartupData: IMobileOnboardingStepSevenStartupData;
  stepSixInvestorData: IMobileOnboardingStepSixInvestorData;
  stepSixStartupData: IMobileOnboardingStepSixStartupData;
  stepThreeData: IMobileOnboardingStepThreeData;
  stepTwoData: IMobileOnboardingStepTwoData;
}

export enum EMobileOnboardingMachineStates {
  HOUSE_RULES_AGREEMENTS = 'house-rules-agreements',
  STEP_EIGHT_INVESTOR = 'step-eight-investor',
  STEP_EIGHT_STARTUP = 'step-eight-startup',
  STEP_FIVE_HUB = 'step-five-hub',
  STEP_FIVE_INVESTOR = 'step-five-investor',
  STEP_FIVE_STARTUP = 'step-five-startup',
  STEP_FOUR = 'step-four',
  STEP_NINE_INVESTOR = 'step-nine-investor',
  STEP_NINE_STARTUP = 'step-nine-startup',
  STEP_ONE = 'step-one',
  STEP_SEVEN_INVESTOR = 'step-seven-investor',
  STEP_SEVEN_STARTUP = 'step-seven-startup',
  STEP_SIX_INVESTOR = 'step-six-investor',
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
