import S from './onboarding.styles';
import { IOnboardingProps } from './onboarding.types';
import { DesktopOnboarding } from './organisms';

export const Onboarding = ({ clientTypes }: IOnboardingProps): JSX.Element => (
  <S.StyledWrapper>
    <DesktopOnboarding clientTypes={clientTypes} />
  </S.StyledWrapper>
);
