export interface IDesktopOnboardingMachineContext {
  base: {
    clientTypeId: number;
    contractEmail: string;
    firstName: string;
    lastName: string;
    location: string;
  } | null;
}

export enum EDesktopOnboardingMachineStates {
  COMPLETE = 'complete',
  INIT = 'init',
}

export enum EDesktopOnboardingMachineEvents {
  BACK = 'BACK',
  NEXT = 'NEXT',
}
