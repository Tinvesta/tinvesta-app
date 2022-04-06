import S from './onboarding.styles';
import { IOnboardingProps } from './onboarding.types';
import { DesktopOnboarding } from './organisms';

export const Onboarding = ({
  clientTypes,
  focusMarkets,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
}: IOnboardingProps): JSX.Element => (
  <S.StyledWrapper>
    <DesktopOnboarding
      clientTypes={clientTypes}
      focusMarkets={focusMarkets}
      startupProfileCreatorTypes={startupProfileCreatorTypes}
      startupSectors={startupSectors}
      teamSizes={teamSizes}
    />
  </S.StyledWrapper>
);
