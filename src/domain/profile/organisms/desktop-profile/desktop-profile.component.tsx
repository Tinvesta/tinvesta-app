import { SubscriptionPlans } from '../../molecules';
import { IProfileProps } from '../../profile.types';
import S from './desktop-profile.styles';

export const DesktopProfile = ({ plans }: IProfileProps): JSX.Element => (
  <S.StyledWrapper>
    <SubscriptionPlans plans={plans} />
  </S.StyledWrapper>
);
