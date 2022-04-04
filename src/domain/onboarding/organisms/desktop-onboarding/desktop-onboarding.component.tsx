import { DesktopOnboardingStepOne } from '../../molecules';
import S from './desktop-onboarding.styles';
import { IDesktopOnboardingProps } from './desktop-onboarding.types';

export const DesktopOnboarding = ({ clientTypes }: IDesktopOnboardingProps): JSX.Element => (
  <S.StyledWrapper>
    <DesktopOnboardingStepOne clientTypes={clientTypes} />
  </S.StyledWrapper>
);
