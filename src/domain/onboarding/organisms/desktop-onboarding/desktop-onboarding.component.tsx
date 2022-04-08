import { useMachine } from '@xstate/react';

import {
  DesktopOnboardingStepOne,
  DesktopOnboardingStepTwoInvestor,
  DesktopOnboardingStepTwoStartup,
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

  if (current.matches(EDesktopOnboardingMachineStates.COMPLETE)) {
    return (
      <DesktopOnboardingStepOne clientTypes={clientTypes} onContinueButtonClick={onStepOneSubmit} />
    );
  }

  if (true) {
    return (
      <DesktopOnboardingStepTwoInvestor
        focusMarkets={focusMarkets}
        industrialSectors={industrialSectors}
        investmentSizes={investmentSizes}
        investmentStageTypes={investmentStageTypes}
        investorDemandTypes={investorDemandTypes}
        investorProfileTypes={investorProfileTypes}
        startupSectors={startupSectors}
        teamSizes={teamSizes}
        onContinueButtonClick={onStepOneSubmit}
      />
    );
  }

  return (
    <DesktopOnboardingStepTwoStartup
      focusMarkets={focusMarkets}
      industrialSectors={industrialSectors}
      investmentSizes={investmentSizes}
      investmentStageTypes={investmentStageTypes}
      startupProfileCreatorTypes={startupProfileCreatorTypes}
      startupSectors={startupSectors}
      teamSizes={teamSizes}
      onContinueButtonClick={onStepOneSubmit}
    />
  );
};
