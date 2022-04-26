import { useMachine } from '@xstate/react';
import { useEffect } from 'react';

import { useUser } from '@utils';

import {
  MobileOnboardingStepFiveStartup,
  MobileOnboardingStepFour,
  MobileOnboardingStepOne,
  MobileOnboardingStepThree,
  MobileOnboardingStepTwo,
} from '../../molecules';
import {
  IMobileOnboardingStepFiveStartupData,
  IMobileOnboardingStepFourData,
  IMobileOnboardingStepOneData,
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
  startupProfileCreatorTypes,
  startupSectors,
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
      | IMobileOnboardingStepFiveStartupData,
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

  return (
    <MobileOnboardingStepFiveStartup
      defaultValues={current.context.stepFiveStartupData}
      focusMarkets={focusMarkets}
      startupProfileCreatorTypes={startupProfileCreatorTypes}
      startupSectors={startupSectors}
      onContinueButtonClick={onContinueButtonClick}
    />
  );
};
