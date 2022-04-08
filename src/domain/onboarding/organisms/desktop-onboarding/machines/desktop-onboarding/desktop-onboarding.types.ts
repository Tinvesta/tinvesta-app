import { IDesktopOnboardingStepOneData } from '../../../../onboarding.types';

export interface IDesktopOnboardingMachineContext {
  base: IDesktopOnboardingStepOneData | null;
}

export enum EDesktopOnboardingMachineStates {
  COMPLETE = 'complete',
  INIT = 'init',
}

export enum EDesktopOnboardingMachineEvents {
  BACK = 'BACK',
  NEXT = 'NEXT',
}
