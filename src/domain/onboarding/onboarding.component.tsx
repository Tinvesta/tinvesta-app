import { IOnboardingProps } from './onboarding.types';
import { DesktopOnboarding } from './organisms';

export const Onboarding = ({
  clientTypes,
  focusMarkets,
  industrialSectors,
  investmentSizes,
  investmentStageTypes,
  startupProfileCreatorTypes,
  startupSectors,
  teamSizes,
}: IOnboardingProps): JSX.Element => (
  <DesktopOnboarding
    clientTypes={clientTypes}
    focusMarkets={focusMarkets}
    industrialSectors={industrialSectors}
    investmentSizes={investmentSizes}
    investmentStageTypes={investmentStageTypes}
    startupProfileCreatorTypes={startupProfileCreatorTypes}
    startupSectors={startupSectors}
    teamSizes={teamSizes}
  />
);
