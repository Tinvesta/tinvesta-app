import {
  IDesktopOnboardingStepFiveInvestorData,
  IDesktopOnboardingStepFiveStartupData,
  IDesktopOnboardingStepFourInvestorData,
  IDesktopOnboardingStepFourStartupData,
  IDesktopOnboardingStepOneData,
  IDesktopOnboardingStepThreeInvestorData,
  IDesktopOnboardingStepThreeStartupData,
  IDesktopOnboardingStepTwoData,
} from '../../../../onboarding.types';

export interface IDesktopOnboardingMachineContext {
  stepFiveInvestorData: IDesktopOnboardingStepFiveInvestorData;
  stepFiveStartupData: IDesktopOnboardingStepFiveStartupData;
  stepFourInvestorData: IDesktopOnboardingStepFourInvestorData;
  stepFourStartupData: IDesktopOnboardingStepFourStartupData;
  stepOneData: IDesktopOnboardingStepOneData;
  stepThreeInvestorData: IDesktopOnboardingStepThreeInvestorData;
  stepThreeStartupData: IDesktopOnboardingStepThreeStartupData;
  stepTwoData: IDesktopOnboardingStepTwoData;
}

export enum EDesktopOnboardingMachineStates {
  COMPLETE = 'complete',
  STEP_FIVE_INVESTOR = 'step-five-investor',
  STEP_FIVE_STARTUP = 'step-five-startup',
  STEP_FOUR_INVESTOR = 'step-four-investor',
  STEP_FOUR_STARTUP = 'step-four-startup',
  STEP_ONE = 'step-one',
  STEP_THREE_HUB = 'step-three-hub',
  STEP_THREE_INVESTOR = 'step-three-investor',
  STEP_THREE_STARTUP = 'step-three-startup',
  STEP_TWO = 'step-two',
}

export enum EDesktopOnboardingMachineEvents {
  BACK = 'BACK',
  NEXT = 'NEXT',
}
