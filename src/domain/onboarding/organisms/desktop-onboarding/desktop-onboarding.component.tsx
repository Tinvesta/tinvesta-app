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

  const onStepOneSubmit = () => send(EDesktopOnboardingMachineEvents.NEXT);

  const onBackClick = () => send(EDesktopOnboardingMachineEvents.BACK);

  return (
    <DesktopOnboardingStepFiveInvestor
      investorDemandTypes={investorDemandTypes}
      onContinueButtonClick={onStepOneSubmit}
    />
  );

  return (
    <DesktopOnboardingStepFourInvestor
      investmentSizes={investmentSizes}
      investmentStageTypes={investmentStageTypes}
      teamSizes={teamSizes}
      onContinueButtonClick={onStepOneSubmit}
    />
  );

  return (
    <DesktopOnboardingStepThreeInvestor
      focusMarkets={focusMarkets}
      industrialSectors={industrialSectors}
      investorProfileTypes={investorProfileTypes}
      startupSectors={startupSectors}
      onContinueButtonClick={onStepOneSubmit}
    />
  );

  return <DesktopOnboardingStepFiveStartup />;

  return (
    <DesktopOnboardingStepFourStartup
      investmentSizes={investmentSizes}
      investmentStageTypes={investmentStageTypes}
      onContinueButtonClick={onStepOneSubmit}
    />
  );

  return (
    <DesktopOnboardingStepThreeStartup
      focusMarkets={focusMarkets}
      industrialSectors={industrialSectors}
      startupProfileCreatorTypes={startupProfileCreatorTypes}
      startupSectors={startupSectors}
      teamSizes={teamSizes}
      onContinueButtonClick={onStepOneSubmit}
    />
  );

  if (current.matches(EDesktopOnboardingMachineStates.INIT)) {
    return <DesktopOnboardingStepOne onContinueButtonClick={onStepOneSubmit} />;
  }

  if (current.matches(EDesktopOnboardingMachineStates.COMPLETE)) {
    return (
      <DesktopOnboardingStepTwo
        clientTypes={clientTypes}
        onBackClick={onBackClick}
        onContinueButtonClick={onStepOneSubmit}
      />
    );
  }

  return (
    <DesktopOnboardingStepThreeInvestor
      focusMarkets={focusMarkets}
      industrialSectors={industrialSectors}
      investorProfileTypes={investorProfileTypes}
      startupSectors={startupSectors}
      onContinueButtonClick={onStepOneSubmit}
    />
  );
};
