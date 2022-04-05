import { createMachine } from 'xstate';

import {
  EDesktopOnboardingMachineEvents,
  EDesktopOnboardingMachineStates,
  IDesktopOnboardingMachineContext,
} from './desktop-onboarding.types';

export const onboardingStateMachine = createMachine<IDesktopOnboardingMachineContext>({
  id: 'onboardingStateMachine',
  initial: EDesktopOnboardingMachineStates.INIT,
  context: {
    base: null,
  },
  states: {
    [EDesktopOnboardingMachineStates.INIT]: {
      on: {
        NEXT: EDesktopOnboardingMachineStates.COMPLETE,
      },
    },
    [EDesktopOnboardingMachineStates.COMPLETE]: {
      on: {
        [EDesktopOnboardingMachineEvents.BACK]: {
          target: EDesktopOnboardingMachineStates.INIT,
        },
      },
    },
  },
});
