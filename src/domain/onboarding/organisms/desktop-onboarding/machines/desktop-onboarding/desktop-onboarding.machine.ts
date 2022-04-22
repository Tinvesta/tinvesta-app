import { assign, createMachine } from 'xstate';

import { getFirstNameAndLastNameFromMultiPartFullName } from '@utils';

import { STARTUP_CLIENT_TYPE_ID } from '@constants';

import {
  defaultDesktopOnboardingStepFiveInvestorFormData,
  defaultDesktopOnboardingStepFiveStartupFormData,
  defaultDesktopOnboardingStepFourInvestorFormData,
  defaultDesktopOnboardingStepFourStartupFormData,
  defaultDesktopOnboardingStepOneFormData,
  defaultDesktopOnboardingStepThreeInvestorFormData,
  defaultDesktopOnboardingStepThreeStartupFormData,
  defaultDesktopOnboardingStepTwoFormData,
} from '../../../../molecules';
import {
  EDesktopOnboardingMachineAdditionalEvents,
  EDesktopOnboardingMachineEvents,
  EDesktopOnboardingMachineStates,
  IDesktopOnboardingMachineContext,
} from './desktop-onboarding.types';

export const onboardingStateMachine = createMachine<IDesktopOnboardingMachineContext>(
  {
    id: 'onboardingStateMachine',
    initial: EDesktopOnboardingMachineStates.STEP_ONE,
    context: {
      stepOneData: defaultDesktopOnboardingStepOneFormData,
      stepTwoData: defaultDesktopOnboardingStepTwoFormData,
      stepThreeStartupData: defaultDesktopOnboardingStepThreeStartupFormData,
      stepThreeInvestorData: defaultDesktopOnboardingStepThreeInvestorFormData,
      stepFourStartupData: defaultDesktopOnboardingStepFourStartupFormData,
      stepFourInvestorData: defaultDesktopOnboardingStepFourInvestorFormData,
      stepFiveStartupData: defaultDesktopOnboardingStepFiveStartupFormData,
      stepFiveInvestorData: defaultDesktopOnboardingStepFiveInvestorFormData,
    },
    states: {
      [EDesktopOnboardingMachineStates.STEP_ONE]: {
        on: {
          [EDesktopOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepOneData',
            target: EDesktopOnboardingMachineStates.STEP_TWO,
          },
        },
      },
      [EDesktopOnboardingMachineStates.STEP_TWO]: {
        on: {
          [EDesktopOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepTwoData',
            target: EDesktopOnboardingMachineStates.STEP_THREE_HUB,
          },
          [EDesktopOnboardingMachineEvents.BACK]: EDesktopOnboardingMachineStates.STEP_ONE,
        },
      },
      [EDesktopOnboardingMachineStates.STEP_THREE_HUB]: {
        always: [
          { target: EDesktopOnboardingMachineStates.STEP_THREE_STARTUP, cond: 'isStartupPath' },
          { target: EDesktopOnboardingMachineStates.STEP_THREE_INVESTOR },
        ],
      },
      [EDesktopOnboardingMachineStates.STEP_THREE_STARTUP]: {
        on: {
          [EDesktopOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepThreeStartupData',
            target: EDesktopOnboardingMachineStates.STEP_FOUR_STARTUP,
          },
          [EDesktopOnboardingMachineEvents.BACK]: EDesktopOnboardingMachineStates.STEP_TWO,
        },
      },
      [EDesktopOnboardingMachineStates.STEP_FOUR_STARTUP]: {
        on: {
          [EDesktopOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepFourStartupData',
            target: EDesktopOnboardingMachineStates.STEP_FIVE_STARTUP,
          },
          [EDesktopOnboardingMachineEvents.BACK]:
            EDesktopOnboardingMachineStates.STEP_THREE_STARTUP,
        },
      },
      [EDesktopOnboardingMachineStates.STEP_FIVE_STARTUP]: {
        on: {
          [EDesktopOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepFiveStartupData',
            target: EDesktopOnboardingMachineStates.HOUSE_RULES_AGREEMENTS,
          },
          [EDesktopOnboardingMachineEvents.BACK]: EDesktopOnboardingMachineStates.STEP_FOUR_STARTUP,
        },
      },
      [EDesktopOnboardingMachineStates.STEP_THREE_INVESTOR]: {
        on: {
          [EDesktopOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepThreeInvestorData',
            target: EDesktopOnboardingMachineStates.STEP_FOUR_INVESTOR,
          },
          [EDesktopOnboardingMachineEvents.BACK]: EDesktopOnboardingMachineStates.STEP_TWO,
        },
      },
      [EDesktopOnboardingMachineStates.STEP_FOUR_INVESTOR]: {
        on: {
          [EDesktopOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepFourInvestorData',
            target: EDesktopOnboardingMachineStates.STEP_FIVE_INVESTOR,
          },
          [EDesktopOnboardingMachineEvents.BACK]:
            EDesktopOnboardingMachineStates.STEP_THREE_INVESTOR,
        },
      },
      [EDesktopOnboardingMachineStates.STEP_FIVE_INVESTOR]: {
        on: {
          [EDesktopOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepFiveInvestorData',
            target: EDesktopOnboardingMachineStates.HOUSE_RULES_AGREEMENTS,
          },
          [EDesktopOnboardingMachineEvents.BACK]:
            EDesktopOnboardingMachineStates.STEP_FOUR_INVESTOR,
        },
      },
      [EDesktopOnboardingMachineStates.HOUSE_RULES_AGREEMENTS]: {
        on: {
          [EDesktopOnboardingMachineEvents.BACK]: [
            { target: EDesktopOnboardingMachineStates.STEP_FIVE_STARTUP, cond: 'isStartupPath' },
            { target: EDesktopOnboardingMachineStates.STEP_FIVE_INVESTOR },
          ],
        },
      },
    },
    on: {
      [EDesktopOnboardingMachineAdditionalEvents.SET_PROFILE_DATA_FROM_SUPABASE]: {
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
            ...defaultDesktopOnboardingStepOneFormData,
            firstName,
            lastName,
            contactEmail,
          };
        },
      }),
      assignStepTwoData: assign({
        stepTwoData: (_, event) => event.data,
      }),
      assignStepThreeStartupData: assign({
        stepThreeStartupData: (_, event) => event.data,
      }),
      assignStepThreeInvestorData: assign({
        stepThreeInvestorData: (_, event) => event.data,
      }),
      assignStepFourStartupData: assign({
        stepFourStartupData: (_, event) => event.data,
      }),
      assignStepFourInvestorData: assign({
        stepFourInvestorData: (_, event) => event.data,
      }),
      assignStepFiveStartupData: assign({
        stepFiveStartupData: (_, event) => event.data,
      }),
      assignStepFiveInvestorData: assign({
        stepFiveInvestorData: (_, event) => event.data,
      }),
    },
    guards: {
      isStartupPath: (context) => context.stepTwoData.clientTypeId === STARTUP_CLIENT_TYPE_ID,
    },
  },
);
