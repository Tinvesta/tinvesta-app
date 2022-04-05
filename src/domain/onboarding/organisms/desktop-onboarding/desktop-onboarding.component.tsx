import { Typography } from '@mui/material';
import { useMachine } from '@xstate/react';

import { DesktopOnboardingStepOne } from '../../molecules';
import S from './desktop-onboarding.styles';
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
      <S.StyledWrapper>
        <DesktopOnboardingStepOne
          clientTypes={clientTypes}
          onContinueButtonClick={onStepOneSubmit}
        />
      </S.StyledWrapper>
    );
  }

  return (
    <S.StyledWrapper>
      <Typography>Pogczamp</Typography>
    </S.StyledWrapper>
  );
};
