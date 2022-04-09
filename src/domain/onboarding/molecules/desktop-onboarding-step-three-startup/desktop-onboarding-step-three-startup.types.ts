import {
  IFocusMarket,
  IIndustrialSector,
  IStartupProfileCreatorType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

import { IDesktopOnboardingStepThreeStartupData } from '../../onboarding.types';

export interface IDesktopOnboardingStepThreeStartupProps {
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  onContinueButtonClick: (data: IDesktopOnboardingStepThreeStartupData) => void;
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
