import { DesktopEditProfileForm, SubscriptionPlans } from '../../molecules';
import { IProfileProps } from '../../profile.types';
import S from './desktop-profile.styles';

export const DesktopProfile = ({ plans, ...restProps }: IProfileProps): JSX.Element => (
  <S.StyledWrapper>
    <SubscriptionPlans plans={plans} />
    <DesktopEditProfileForm {...restProps} />
  </S.StyledWrapper>
);
