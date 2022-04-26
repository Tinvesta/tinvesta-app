import { assign, createMachine } from 'xstate';

import { getFirstNameAndLastNameFromMultiPartFullName, isStartupProfile } from '@utils';

import {
  defaultMobileOnboardingStepFiveStartupFormData,
  defaultMobileOnboardingStepFourFormData,
  defaultMobileOnboardingStepOneFormData,
  defaultMobileOnboardingStepSixStartupFormData,
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
      stepSixStartupData: defaultMobileOnboardingStepSixStartupFormData,
      stepFiveStartupData: defaultMobileOnboardingStepFiveStartupFormData,
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
            target: EMobileOnboardingMachineStates.STEP_FIVE_HUB,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_THREE,
        },
      },
      [EMobileOnboardingMachineStates.STEP_FIVE_HUB]: {
        always: [
          { target: EMobileOnboardingMachineStates.STEP_FIVE_STARTUP, cond: 'isStartupPath' },
          { target: EMobileOnboardingMachineStates.STEP_ONE },
        ],
      },
      [EMobileOnboardingMachineStates.STEP_FIVE_STARTUP]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepFiveStartupData',
            target: EMobileOnboardingMachineStates.STEP_SIX_STARTUP,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_FOUR,
        },
      },
      [EMobileOnboardingMachineStates.STEP_SIX_STARTUP]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepSixStartupData',
            target: EMobileOnboardingMachineStates.STEP_ONE,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_FIVE_STARTUP,
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
      assignStepFiveStartupData: assign({
        stepFiveStartupData: (_, event) => event.data,
      }),
      assignStepSixStartupData: assign({
        stepSixStartupData: (_, event) => event.data,
      }),
    },
    guards: {
      isStartupPath: (context) => isStartupProfile(context.stepTwoData.clientTypeId),
    },
  },
);
