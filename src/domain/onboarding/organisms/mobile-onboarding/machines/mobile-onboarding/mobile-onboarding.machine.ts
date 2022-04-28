import { assign, createMachine } from 'xstate';

import { getFirstNameAndLastNameFromMultiPartFullName, isStartupProfile } from '@utils';

import {
  defaultMobileOnboardingStepEightInvestorFormData,
  defaultMobileOnboardingStepEightStartupFormData,
  defaultMobileOnboardingStepFiveInvestorFormData,
  defaultMobileOnboardingStepFiveStartupFormData,
  defaultMobileOnboardingStepFourFormData,
  defaultMobileOnboardingStepNineStartupFormData,
  defaultMobileOnboardingStepOneFormData,
  defaultMobileOnboardingStepSevenInvestorFormData,
  defaultMobileOnboardingStepSevenStartupFormData,
  defaultMobileOnboardingStepSixInvestorFormData,
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
      stepNineStartupData: defaultMobileOnboardingStepNineStartupFormData,
      stepSixInvestorData: defaultMobileOnboardingStepSixInvestorFormData,
      stepSevenStartupData: defaultMobileOnboardingStepSevenStartupFormData,
      stepEightStartupData: defaultMobileOnboardingStepEightStartupFormData,
      stepFiveInvestorData: defaultMobileOnboardingStepFiveInvestorFormData,
      stepSevenInvestorData: defaultMobileOnboardingStepSevenInvestorFormData,
      stepEightInvestorData: defaultMobileOnboardingStepEightInvestorFormData,
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
          { target: EMobileOnboardingMachineStates.STEP_FIVE_INVESTOR },
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
            target: EMobileOnboardingMachineStates.STEP_SEVEN_STARTUP,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_FIVE_STARTUP,
        },
      },
      [EMobileOnboardingMachineStates.STEP_SEVEN_STARTUP]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepSevenStartupData',
            target: EMobileOnboardingMachineStates.STEP_EIGHT_STARTUP,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_SIX_STARTUP,
        },
      },
      [EMobileOnboardingMachineStates.STEP_EIGHT_STARTUP]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepEightStartupData',
            target: EMobileOnboardingMachineStates.STEP_NINE_STARTUP,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_SEVEN_STARTUP,
        },
      },
      [EMobileOnboardingMachineStates.STEP_NINE_STARTUP]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepNineStartupData',
            target: EMobileOnboardingMachineStates.STEP_ONE,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_EIGHT_STARTUP,
        },
      },
      [EMobileOnboardingMachineStates.STEP_FIVE_INVESTOR]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepFiveInvestorData',
            target: EMobileOnboardingMachineStates.STEP_SIX_INVESTOR,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_FOUR,
        },
      },
      [EMobileOnboardingMachineStates.STEP_SIX_INVESTOR]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepSixInvestorData',
            target: EMobileOnboardingMachineStates.STEP_SEVEN_INVESTOR,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_FIVE_INVESTOR,
        },
      },
      [EMobileOnboardingMachineStates.STEP_SEVEN_INVESTOR]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepSevenInvestorData',
            target: EMobileOnboardingMachineStates.STEP_EIGHT_INVESTOR,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_SIX_INVESTOR,
        },
      },
      [EMobileOnboardingMachineStates.STEP_EIGHT_INVESTOR]: {
        on: {
          [EMobileOnboardingMachineEvents.NEXT]: {
            actions: 'assignStepEightInvestorData',
            target: EMobileOnboardingMachineStates.STEP_ONE,
          },
          [EMobileOnboardingMachineEvents.BACK]: EMobileOnboardingMachineStates.STEP_SEVEN_INVESTOR,
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
      assignStepSevenStartupData: assign({
        stepSevenStartupData: (_, event) => event.data,
      }),
      assignStepEightStartupData: assign({
        stepEightStartupData: (_, event) => event.data,
      }),
      assignStepNineStartupData: assign({
        stepNineStartupData: (_, event) => event.data,
      }),
      assignStepFiveInvestorData: assign({
        stepFiveInvestorData: (_, event) => event.data,
      }),
      assignStepSixInvestorData: assign({
        stepSixInvestorData: (_, event) => event.data,
      }),
      assignStepSevenInvestorData: assign({
        stepSevenInvestorData: (_, event) => event.data,
      }),
      assignStepEightInvestorData: assign({
        stepEightInvestorData: (_, event) => event.data,
      }),
    },
    guards: {
      isStartupPath: (context) => isStartupProfile(context.stepTwoData.clientTypeId),
    },
  },
);
