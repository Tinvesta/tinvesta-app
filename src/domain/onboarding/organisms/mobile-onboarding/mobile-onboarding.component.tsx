import { useMachine } from '@xstate/react';
import { useEffect } from 'react';

import { useUser } from '@utils';

import {
  MobileOnboardingStepEightStartup,
  MobileOnboardingStepFiveInvestor,
  MobileOnboardingStepFiveStartup,
  MobileOnboardingStepFour,
  MobileOnboardingStepNineStartup,
  MobileOnboardingStepOne,
  MobileOnboardingStepSevenStartup,
  MobileOnboardingStepSixStartup,
  MobileOnboardingStepThree,
  MobileOnboardingStepTwo,
} from '../../molecules';
import {
  IMobileOnboardingStepEightStartupData,
  IMobileOnboardingStepFiveInvestorData,
  IMobileOnboardingStepFiveStartupData,
  IMobileOnboardingStepFourData,
  IMobileOnboardingStepNineStartupData,
  IMobileOnboardingStepOneData,
  IMobileOnboardingStepSevenStartupData,
  IMobileOnboardingStepSixStartupData,
  IMobileOnboardingStepThreeData,
  IMobileOnboardingStepTwoData,
} from '../../onboarding.types';
import {
  EMobileOnboardingMachineAdditionalEvents,
  EMobileOnboardingMachineEvents,
  EMobileOnboardingMachineStates,
  onboardingStateMachine,
} from './machines';
import { IMobileOnboardingProps } from './mobile-onboarding.types';

export const MobileOnboarding = ({
  clientTypes,
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  investorProfileTypes,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
}: IMobileOnboardingProps): JSX.Element => {
  const { isLoading: isProfileLoading, user } = useUser();

  const [current, send] = useMachine(onboardingStateMachine);

  useEffect(() => {
    if (!isProfileLoading && user?.contact_email) {
      send({
        type: EMobileOnboardingMachineAdditionalEvents.SET_PROFILE_DATA_FROM_SUPABASE,
        fullName: user.user_metadata.full_name,
        contactEmail: user.contact_email,
      });
    }
  }, [isProfileLoading, user?.contact_email]);

  const onContinueButtonClick = (
    data:
      | IMobileOnboardingStepOneData
      | IMobileOnboardingStepTwoData
      | IMobileOnboardingStepThreeData
      | IMobileOnboardingStepFourData
      | IMobileOnboardingStepFiveStartupData
      | IMobileOnboardingStepSixStartupData
      | IMobileOnboardingStepSevenStartupData
      | IMobileOnboardingStepEightStartupData
      | IMobileOnboardingStepNineStartupData
      | IMobileOnboardingStepFiveInvestorData,
  ) => send({ type: EMobileOnboardingMachineEvents.NEXT, data });

  if (current.matches(EMobileOnboardingMachineStates.STEP_ONE)) {
    return (
      <MobileOnboardingStepOne
        defaultValues={current.context.stepOneData}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_TWO)) {
    return (
      <MobileOnboardingStepTwo
        clientTypes={clientTypes}
        defaultValues={current.context.stepTwoData}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_THREE)) {
    return (
      <MobileOnboardingStepThree
        defaultValues={current.context.stepThreeData}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_FOUR)) {
    return (
      <MobileOnboardingStepFour
        defaultValues={current.context.stepFourData}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_FIVE_STARTUP)) {
    return (
      <MobileOnboardingStepFiveStartup
        defaultValues={current.context.stepFiveStartupData}
        startupProfileCreatorTypes={startupProfileCreatorTypes}
        teamSizes={teamSizes}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_SIX_STARTUP)) {
    return (
      <MobileOnboardingStepSixStartup
        defaultValues={current.context.stepSixStartupData}
        industrialSectors={industrialSectors}
        startupSectors={startupSectors}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_SEVEN_STARTUP)) {
    return (
      <MobileOnboardingStepSevenStartup
        defaultValues={current.context.stepSevenStartupData}
        focusMarkets={focusMarkets}
        investmentSizes={investmentSizes}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_EIGHT_STARTUP)) {
    return (
      <MobileOnboardingStepEightStartup
        defaultValues={current.context.stepEightStartupData}
        investmentStageTypes={investmentStageTypes}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EMobileOnboardingMachineStates.STEP_NINE_STARTUP)) {
    return (
      <MobileOnboardingStepNineStartup
        defaultValues={current.context.stepNineStartupData}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  return (
    <MobileOnboardingStepFiveInvestor
      defaultValues={current.context.stepFiveInvestorData}
      focusMarkets={focusMarkets}
      investorProfileTypes={investorProfileTypes}
      onContinueButtonClick={onContinueButtonClick}
    />
  );
};
