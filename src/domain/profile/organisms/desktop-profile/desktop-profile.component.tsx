import { SubscriptionPlans } from '../../molecules';
import S from './desktop-profile.styles';
import { IDesktopProfileProps } from './desktop-profile.types';

export const DesktopProfile = ({ plans }: IDesktopProfileProps): JSX.Element => (
  <S.StyledWrapper>
    <SubscriptionPlans plans={plans} />
  </S.StyledWrapper>
);
