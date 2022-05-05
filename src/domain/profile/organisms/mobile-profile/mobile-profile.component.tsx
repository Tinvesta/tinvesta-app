import { DesktopEditProfileForm, SubscriptionPlans } from '../../molecules';
import { IProfileProps } from '../../profile.types';
import S from './mobile-profile.styles';

export const MobileProfile = ({ plans, ...restProps }: IProfileProps): JSX.Element => (
  <S.StyledWrapper>
    <SubscriptionPlans plans={plans} />
    <DesktopEditProfileForm {...restProps} />
  </S.StyledWrapper>
);
