import { IDesktopOnboardingBaseData } from '../../../../onboarding.types';

export interface IDesktopOnboardingMachineContext {
  base: IDesktopOnboardingBaseData | null;
}

export enum EDesktopOnboardingMachineStates {
  COMPLETE = 'complete',
  INIT = 'init',
}

export enum EDesktopOnboardingMachineEvents {
  BACK = 'BACK',
  NEXT = 'NEXT',
}
