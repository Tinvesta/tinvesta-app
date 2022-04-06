import {
  IFocusMarket,
  IIndustrialSector,
  IStartupProfileCreatorType,
  IStartupSector,
  ITeamSize,
} from '@interfaces';

import { IDesktopOnboardingStartupData } from '../../onboarding.types';

export interface IDesktopOnboardingStepTwoStartupProps {
  focusMarkets: IFocusMarket[];
  industrialSectors: IIndustrialSector[];
  onContinueButtonClick: (data: IDesktopOnboardingStartupData) => void;
  startupProfileCreatorTypes: IStartupProfileCreatorType[];
  startupSectors: IStartupSector[];
  teamSizes: ITeamSize[];
}
