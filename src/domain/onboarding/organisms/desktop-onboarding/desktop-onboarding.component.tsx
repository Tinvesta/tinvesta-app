import { Typography } from '@mui/material';
import { useMachine } from '@xstate/react';

import { DesktopOnboardingStepOne } from '../../molecules';
import { IDesktopOnboardingProps } from './desktop-onboarding.types';
import {
  EDesktopOnboardingMachineEvents,
  EDesktopOnboardingMachineStates,
  onboardingStateMachine,
} from './machines';

export const DesktopOnboarding = ({ clientTypes }: IDesktopOnboardingProps): JSX.Element => {
  const [current, send] = useMachine(onboardingStateMachine);

  const onStepOneSubmit = () => send(EDesktopOnboardingMachineEvents.NEXT);

  if (current.matches(EDesktopOnboardingMachineStates.INIT)) {
    return (
      <DesktopOnboardingStepOne clientTypes={clientTypes} onContinueButtonClick={onStepOneSubmit} />
    );
  }

  return <Typography>Pogczamp</Typography>;
};
