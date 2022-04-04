import { DesktopoOnboardingStepOne } from './molecules';
import S from './onboarding.styles';
import { IOnboardingProps } from './onboarding.types';

export const Onboarding = ({ clientTypes }: IOnboardingProps): JSX.Element => (
  <S.StyledWrapper>
    <DesktopoOnboardingStepOne clientTypes={clientTypes} />
  </S.StyledWrapper>
);
