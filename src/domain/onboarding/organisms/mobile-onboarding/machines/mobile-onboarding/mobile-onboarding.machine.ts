import { assign, createMachine } from 'xstate';

import { getFirstNameAndLastNameFromMultiPartFullName, isStartupProfile } from '@utils';

import {
  defaultMobileOnboardingStepFourFormData,
  defaultMobileOnboardingStepOneFormData,
  defaultMobileOnboardingStepThreeFormData,
  defaultMobileOnboardingStepTwoFormData,
} from '../../../../molecules';
import {
  EMobileOnboardingMachineAdditionalEvents,
  EMobileOnboardingMachineEvents,
  EMobileOnboardingMachineStates,
  IMobileOnboardingMachineContext,
} from './mobile-onboarding.types';

export const onboardingStateMachine = createMachine<IMobileOnboardingMachineContext>(
  {
    id: 'onboardingStateMachine',
    initial: EMobileOnboardingMachineStates.STEP_ONE,
    context: {
      stepOneData: defaultMobileOnboardingStepOneFormData,
      stepTwoData: defaultMobileOnboardingStepTwoFormData,
      stepFourData: defaultMobileOnboardingStepFourFormData,
      stepThreeData: defaultMobileOnboardingStepThreeFormData,
    },
    states: {
      [EMobileOnboardingMachineStates.STEP_ONE]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepOneData',
            target: EMobileOnboardingMachineStates.STEP_TWO,
          },
        },
      },
      [EMobileOnboardingMachineStates.STEP_TWO]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepTwoData',
            target: EMobileOnboardingMachineStates.STEP_THREE,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_ONE,
        },
      },
      [EMobileOnboardingMachineStates.STEP_THREE]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepThreeData',
            target: EMobileOnboardingMachineStates.STEP_FOUR,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_TWO,
        },
      },
      [EMobileOnboardingMachineStates.STEP_FOUR]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepFourData',
            target: EMobileOnboardingMachineStates.STEP_ONE,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_THREE,
        },
      },
    },
    on: {
      [EMobileOnboardingMachineAdditionalEvents.SET_PROFILE_DATA_FROM_SUPABASE]: {
        actions: 'assignFirstNameLastNameAndContactEmail',
      },
    },
  },
  {
    actions: {
      assignStepOneData: assign({
        stepOneData: (_, event) => event.data,
      }),
      assignFirstNameLastNameAndContactEmail: assign({
        stepOneData: (_, { contactEmail, fullName }) => {
          const { firstName, lastName } = getFirstNameAndLastNameFromMultiPartFullName(fullName);

          return {
            ...defaultMobileOnboardingStepOneFormData,
            firstName,
            lastName,
            contactEmail,
          };
        },
      }),
      assignStepTwoData: assign({
        stepTwoData: (_, event) => event.data,
      }),
      assignStepThreeData: assign({
        stepThreeData: (_, event) => event.data,
      }),
      assignStepFourData: assign({
        stepFourData: (_, event) => event.data,
      }),
    },
    guards: {
      isStartupPath: (context) => isStartupProfile(context.stepTwoData.clientTypeId),
    },
  },
);
