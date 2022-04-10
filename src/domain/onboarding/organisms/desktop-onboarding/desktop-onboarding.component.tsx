import { useMachine } from '@xstate/react';

import {
  DesktopOnboardingStepFiveInvestor,
  DesktopOnboardingStepFiveStartup,
  DesktopOnboardingStepFourInvestor,
  DesktopOnboardingStepFourStartup,
  DesktopOnboardingStepOne,
  DesktopOnboardingStepThreeInvestor,
  DesktopOnboardingStepThreeStartup,
  DesktopOnboardingStepTwo,
} from '../../molecules';
import {
  IDesktopOnboardingStepFiveInvestorData,
  IDesktopOnboardingStepFiveStartupData,
  IDesktopOnboardingStepFourInvestorData,
  IDesktopOnboardingStepFourStartupData,
  IDesktopOnboardingStepOneData,
  IDesktopOnboardingStepThreeInvestorData,
  IDesktopOnboardingStepThreeStartupData,
  IDesktopOnboardingStepTwoData,
} from '../../onboarding.types';
import { IDesktopOnboardingProps } from './desktop-onboarding.types';
import {
  EDesktopOnboardingMachineEvents,
  EDesktopOnboardingMachineStates,
  onboardingStateMachine,
} from './machines';

export const DesktopOnboarding = ({
  clientTypes,
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  investorDemandTypes,
  investorProfileTypes,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
}: IDesktopOnboardingProps): JSX.Element => {
  const [current, send] = useMachine(onboardingStateMachine);

  const onContinueButtonClick = (
    data:
      | IDesktopOnboardingStepOneData
      | IDesktopOnboardingStepTwoData
      | IDesktopOnboardingStepThreeStartupData
      | IDesktopOnboardingStepThreeInvestorData
      | IDesktopOnboardingStepFourInvestorData
      | IDesktopOnboardingStepFourStartupData
      | IDesktopOnboardingStepFiveInvestorData
      | IDesktopOnboardingStepFiveStartupData,
  ) => send({ type: EDesktopOnboardingMachineEvents.NEXT, data });

  const onBackButtonClick = () => send(EDesktopOnboardingMachineEvents.BACK);

  if (current.matches(EDesktopOnboardingMachineStates.STEP_ONE)) {
    return (
      <DesktopOnboardingStepOne
        defaultValues={current.context.stepOneData}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EDesktopOnboardingMachineStates.STEP_TWO)) {
    return (
      <DesktopOnboardingStepTwo
        clientTypes={clientTypes}
        defaultValues={current.context.stepTwoData}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  // STARTUP PATH
  if (current.matches(EDesktopOnboardingMachineStates.STEP_THREE_STARTUP)) {
    return (
      <DesktopOnboardingStepThreeStartup
        focusMarkets={focusMarkets}
        industrialSectors={industrialSectors}
        startupProfileCreatorTypes={startupProfileCreatorTypes}
        startupSectors={startupSectors}
        teamSizes={teamSizes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EDesktopOnboardingMachineStates.STEP_FOUR_STARTUP)) {
    return (
      <DesktopOnboardingStepFourStartup
        investmentSizes={investmentSizes}
        investmentStageTypes={investmentStageTypes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EDesktopOnboardingMachineStates.STEP_FIVE_STARTUP)) {
    return (
      <DesktopOnboardingStepFiveStartup
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  // INVESTOR PATH
  if (current.matches(EDesktopOnboardingMachineStates.STEP_THREE_INVESTOR)) {
    return (
      <DesktopOnboardingStepThreeInvestor
        focusMarkets={focusMarkets}
        industrialSectors={industrialSectors}
        investorProfileTypes={investorProfileTypes}
        startupSectors={startupSectors}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EDesktopOnboardingMachineStates.STEP_FOUR_INVESTOR)) {
    return (
      <DesktopOnboardingStepFourInvestor
        investmentSizes={investmentSizes}
        investmentStageTypes={investmentStageTypes}
        teamSizes={teamSizes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  if (current.matches(EDesktopOnboardingMachineStates.STEP_FIVE_INVESTOR)) {
    return (
      <DesktopOnboardingStepFiveInvestor
        investorDemandTypes={investorDemandTypes}
        onBackButtonClick={onBackButtonClick}
        onContinueButtonClick={onContinueButtonClick}
      />
    );
  }

  return <div>Done</div>;
};
